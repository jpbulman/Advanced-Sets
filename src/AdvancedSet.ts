export default class AdvancedSet<T> {
  // The underlying set
  private _set: Set<T> = new Set();
  // The parent, or 'universal', set. This is defined when a child is created with 'createSubSet()'
  private _universalSet?: AdvancedSet<T> = undefined;

  constructor(...initialValues: T[] | never) {
    for (const val of initialValues) {
      this._set.add(val);
    }
  }

  public has(val: T): boolean {
    return this._set.has(val);
  }

  public add(val: T): AdvancedSet<T> {
    this._set.add(val);
    return this;
  }

  public delete(val: T): AdvancedSet<T> {
    this._set.delete(val);
    return this;
  }

  public clear(): AdvancedSet<T> {
    this._set.clear();
    return this;
  }

  public get size(): number {
    return this._set.size;
  }

  public toSimpleSet(): Set<T> {
    return this._set;
  }

  public static Ø() {}

  /*
   * Returns a new set containing the shared elements between this set and the given parameter set
   */
  public intersection(set: AdvancedSet<T>): AdvancedSet<T> {
    return new AdvancedSet(...this.toArray().filter((x) => set.has(x)));
  }

  public toArray(): Array<T> {
    return Array.from(this._set);
  }

  public complement(): AdvancedSet<T> {
    if (this._universalSet) {
      return new AdvancedSet<T>(...this._universalSet.toArray().filter((x) => !this._set.has(x)));
    } else {
      const empty = new AdvancedSet<T>();
      empty._universalSet = this;
      return empty;
    }
  }

  public createSubSet(...initialValues: T[] | never): AdvancedSet<T> {
    // Make sure all of the values are inside the universal set
    for (const i of initialValues) {
      if (!this._set.has(i)) {
        throw new Error(`Element ${i} is not in the given universal set`);
      }
    }

    const newSet = new AdvancedSet<T>(...initialValues);
    // Set the child's parent to the current set
    newSet._universalSet = this;
    return newSet;
  }

  public filter(filterFunc: (currVal: T) => boolean): AdvancedSet<T> {
    return new AdvancedSet<T>(...this.toArray().filter(filterFunc));
  }

  public map<R>(mapFunc: (currVal: T) => R): AdvancedSet<R> {
    return new AdvancedSet<R>(...this.toArray().map(mapFunc));
  }

  public reduce<R>(reduceFunc: (accumulator: R, currVal: T) => any, startingValue: R): R {
    return this.toArray().reduce(reduceFunc, startingValue);
  }

  public forEach<R>(forEachFunc: (currVal: T) => R): void {
    this._set.forEach((val) => {
      forEachFunc(val);
    });
  }

  public equals(otherSet: AdvancedSet<T>): boolean {
    return otherSet.size === this.size && otherSet.filter((x) => this.has(x)).size == this.size;
  }

  public isEmpty(): boolean {
    return this.size === 0;
  }

  public union(setB: AdvancedSet<T>): AdvancedSet<T> {
    return new AdvancedSet(...this.toArray(), ...setB.toArray());
  }

  public difference(setB: AdvancedSet<T>): AdvancedSet<T> {
    return this.filter((a) => !setB.has(a));
  }

  public isSubsetOf(setB: AdvancedSet<T>): boolean {
    return this.filter((a) => setB.has(a)).size === this.size;
  }

  public isSupersetOf(setB: AdvancedSet<T>): boolean {
    return setB.isSubsetOf(this);
  }

  public isDisjointWith(setB: AdvancedSet<T>): boolean {
    return this.intersection(setB).isEmpty();
  }

  //partialSubset, isProperSubsetOf, isProperSupersetOf
}

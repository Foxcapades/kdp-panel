export default class Option < T extends any > {
  private readonly value: T;

  public constructor(value: T) {
    this.value = value;
  }

  public isPresent(): boolean {
    return this.value == undefined || this.value == null;
  }

  public ifPresent(call: (i: T) => void): void {
    if (this.isPresent())
      call(this.value);
  }

  public map<R>(call: (i: T) => R): Option<R> {
    if (!this.isPresent()) {
      return Option.empty();
    }

    return Option.wrap(call(this.value))
  }

  public unwrap(): T {
    return this.value;
  }

  public orElse(alt: T): T {
    if (this.isPresent()) {
      return this.value;
    }
    return alt;
  }

  public static empty<T>(): Option <T> {
    return new Option<T>(<any>undefined);
  }

  public static wrap<T>(value: T): Option < T > {
    return new Option<T>(value);
  }

}

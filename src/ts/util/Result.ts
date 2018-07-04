import {Exception} from "./Exception";

export class ResultMapException < T, R > extends Exception {
  public readonly value: T;
  public readonly mapFunc: (i: T) => R | Result < R >;

  constructor(message: string, value: T, mapFunc: (i: T) => R | Result < R >, causedBy: any) {
    super(message, causedBy);
    this.value = value;
    this.mapFunc = mapFunc;
  }
}

export class Result < T extends any > {
  private readonly value: T;
  private readonly error: Exception;

  private constructor(value: T, error: Exception) {
    this.value = value;
    this.error = error;
  }

  public isError(): boolean {
    return this.error != null;
  }

  public isValue(): boolean {
    return this.value != null;
  }

  public getError(): Exception {
    if (!this.isError())
      throw new Exception("attempted to get error from value Result");
    return this.error;
  }

  public getValue(): T {
    if (!this.isValue())
      throw new Exception("attempted to get value from error Result");
    return this.value;
  }

  public map<R>(fn: (i: T) => R): Result < R > {
    if (this.isError())
      return Result.error(this.error);
    try {
      const tmp: R = fn(this.value);
      return Result.value(tmp);
    } catch (e) {
      return Result.error(new ResultMapException<T, R>(
        "failed to map result value",
        this.value,
        fn,
        e
      ));
    }
  }

  public flatMap<R>(fn: (i: T) => Result<R>): Result < R > {
    if (this.isError())
      return Result.error(this.error);
    try {
      return fn(this.value);
    } catch (e) {
      return Result.error(new ResultMapException<T, R>(
        "failed to map result value",
        this.value,
        fn,
        e
      ));
    }
  }

  public static error<T>(error: Exception): Result<T> {
    if (error === null || error === undefined)
      throw new Exception("cannot pass null error to Result.error()");
    return new Result<T>(<any>null, error);
  }

  public static value<T>(value: T): Result<T> {
    if (value === null || value === undefined)
      throw new Exception("cannot pass null value to Result.value()");
    return new Result<T>(value, <any>null);
  }
}
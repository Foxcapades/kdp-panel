export class Filter < T extends any > {
  public type: string;
  public value: T;

  public constructor(type: string, value: T) {
    this.type = type;
    this.value = value;
  }
}


export class Exception {
  public readonly message: string;
  public readonly causedBy: any;

  constructor(message: string);
  constructor(message: string, causedBy: any);
  constructor(message: string, causedBy?: any) {
    this.message = message;
    this.causedBy = causedBy;
  }

  public toJSON(): Object {
    return this.causedBy === null || this.causedBy === undefined
      ? {message: this.message}
      : this;
  }
}
export class PostAjax {
  public action: string;
  public ids: Array<string>;
  public type: string;

  constructor(action: string, ids: Array<string>, type: string) {
    this.action = action;
    this.ids = ids;
    this.type = type;
  }
}

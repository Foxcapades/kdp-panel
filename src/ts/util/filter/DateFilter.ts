export class DateFilter {
  public readonly type: string;
  public readonly from: string;
  public readonly to: string;

  public constructor(from: string, to: string) {
    this.type = "date-range";
    this.from = from;
    this.to = to;
  }
}
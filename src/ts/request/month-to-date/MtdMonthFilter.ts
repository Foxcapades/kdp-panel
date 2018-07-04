import {Filter} from "../../util/filter/Filter";

export enum MtdMonth {
  CURRENT = "current",
  PREVIOUS = "previous"
}

export class MtdMonthFilter extends Filter <MtdMonth> {
  constructor(type: string, value: MtdMonth) {
    super(type, value);
  }
}
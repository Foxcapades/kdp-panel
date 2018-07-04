import {Filter} from "../../util/filter/Filter";

export enum MtdBookType {
  EBOOK     = "Ebook",
  PAPERBACK = "POD"
}

export class MtdBookTypeFilter extends Filter <MtdBookType> {
  constructor(type: string, value: MtdBookType) {
    super(type, value);
  }
}
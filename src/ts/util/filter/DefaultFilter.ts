import {Filter} from "./Filter";

export class DefaultFilter extends Filter <Array<string>> {
  constructor(type: string, value: Array<string>) {
    super(type, value);
  }
}
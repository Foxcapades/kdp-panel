import {Result} from "../util/Result";
import {Exception} from "../util/Exception";

export enum RequestType {
  RENDER = "render"
}

export function RequestTypeFromString(val: string): Result < RequestType > {
  switch (val) {
    case "render":
      return Result.value(RequestType.RENDER);
    default:
      return Result.error(new Exception(`invalid request type "${val}"`));
  }
}

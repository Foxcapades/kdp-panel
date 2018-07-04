import {Result} from "../util/Result";
import {Exception} from "../util/Exception";

class RawApiParseException extends Exception {
  public readonly rawValue: string;

  constructor(message: string, rawValue: string);
  constructor(message: string, rawValue: string, causedBy: any);
  constructor(message: string, rawValue: string, causedBy?: any) {
    super(message, causedBy);
    this.rawValue = rawValue;
  }

  toJSON(): Object {
    const tmp: any = super.toJSON();
    tmp["rawValue"] = this.rawValue;
    return tmp;
  }
}

export class RawApiResponse {
  public action: string;
  public data: string;
  public isDownloadRequest: boolean;
  public requestId: string;
  public requestType: string;
  public targetId: Array<string>;
  public time: string;

  constructor(
    action: string,
    data: string,
    isDownloadRequest: boolean,
    requestId: string,
    requestType: string,
    targetId: Array<string>,
    time: string
  ) {
    this.action = action;
    this.data = data;
    this.isDownloadRequest = isDownloadRequest;
    this.requestId = requestId;
    this.requestType = requestType;
    this.targetId = targetId;
    this.time = time;
  }

  public static fromResponseText(i: string): Result < RawApiResponse > {
    try {
      const tmp = JSON.parse(i);
      if (tmp.hasOwnProperty("exception"))
        return Result.error(new RawApiParseException("exception response received", i));
      return Result.value(new RawApiResponse(
        tmp["action"],
        tmp["data"],
        tmp["isDownloadRequest"],
        tmp["request-id"],
        tmp["requesttype"],
        tmp["target-id"],
        tmp["time"]
      ));
    } catch (e) {
      return Result.error(new RawApiParseException("failed to parse raw api response", i, e));
    }
  }
}
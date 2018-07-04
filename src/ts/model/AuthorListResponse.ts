import {RequestType, RequestTypeFromString} from "../request/RequestType";
import {RawApiResponse} from "./RawApiResponse";
import {Result} from "../util/Result";
import {Exception} from "../util/Exception";
import {Author} from "./Author";

interface RawData {
  "dynamic-dropdown": Array < AuthorListElement >
}

interface AuthorListElement {
  [index: string]: string
}

function translateRawData(raw: RawData): Array<Author> {
  return translateList(raw["dynamic-dropdown"]);
}

function translateList(raw: Array<AuthorListElement>): Array<Author> {
  const out: Array<Author> = new Array<Author>(raw.length);
  for (let i = 0; i < raw.length; i++) {
    out[i] = new Author(raw[i][0], raw[i][1])
  }
  return out;
}

export class AuthorListResponse {
  public readonly action: Array<any>;
  public readonly data: Array<Author>;
  public readonly isDownloadRequest: boolean;
  public readonly requestId: string;
  public readonly requestType: RequestType;
  public readonly targetId: Array<string>;
  public readonly time: string;

  private constructor(
    action: Array<any>,
    data: Array<Author>,
    isDownloadRequest: boolean,
    requestId: string,
    requestType: RequestType,
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

  public static fromRawResponse(i: RawApiResponse): Result<AuthorListResponse> {
    try {
      return Result.value(new AuthorListResponse(
        JSON.parse(i.action),
        translateRawData(JSON.parse(i.data)),
        i.isDownloadRequest,
        i.requestId,
        RequestTypeFromString(i.requestType).getValue(),
        i.targetId,
        i.time
      ));
    } catch (e) {
      return Result.error(new Exception("failed to translate raw response to AuthorListResponse", e))
    }
  }
}
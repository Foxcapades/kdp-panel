import {PostAjax} from "./PostAjax";
import {RequestType} from "./RequestType";
import {KdpTarget} from "./KdpTarget";

export class KdpRequest {
  public postAjax: Array<PostAjax>;
  public target: Array<KdpTarget<any>>;
  public requestType: RequestType;
  public customer: any;
  public locale: string;
  public namespace: string;
  public pageId: string;
  public vendorCode: any;
  public time: Date;
  public requestId: string;

  public constructor(
    postAjax: Array<PostAjax>,
    target: Array<KdpTarget<any>>,
    requestType: RequestType,
    locale: string,
    pageId: string,
    requestId: string
  ) {
    this.postAjax = postAjax;
    this.target = target;
    this.requestType = requestType;
    this.customer = "";
    this.locale = locale;
    this.namespace = "kdp";
    this.pageId = pageId;
    this.vendorCode = "";
    this.time = new Date();
    this.requestId = requestId;
  }

  public fillUrlParams(u: URLSearchParams) {
    u.set("post-ajax", JSON.stringify(this.postAjax));
    u.set("target", JSON.stringify(this.target));
    u.set("requesttype", this.requestType);
    u.set("customer", this.customer);
    u.set("locale", this.locale);
    u.set("namespace", this.namespace);
    u.set("pageid", this.pageId);
    u.set("vendorcode", this.vendorCode);
    u.set("time", this.time.getTime().toString());
    u.set("request-id", this.requestId)
  }
}

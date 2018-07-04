import {DefaultFilter} from "../../util/filter/DefaultFilter";
import {RenderRequest} from "../RenderRequest";
import {PostAjax} from "../PostAjax";
import {KdpTarget} from "../KdpTarget";

export class LtdReportRequest extends RenderRequest {
  public marketPlaceId: DefaultFilter;
  public author: DefaultFilter;
  public asin: DefaultFilter;
  public date: DefaultFilter;

  public constructor(
    postAjax: Array<PostAjax>,
    target: Array<KdpTarget<any>>,
    locale: string,
    requestId: string,
    marketPlaceId: DefaultFilter,
    author: DefaultFilter,
    asin: DefaultFilter,
    date: DefaultFilter,
  ) {
    super(postAjax, target, locale, requestId);
    this.marketPlaceId = marketPlaceId;
    this.author = author;
    this.asin = asin;
    this.date = date;
  }

  fillUrlParams(u: URLSearchParams): void {
    super.fillUrlParams(u);
    u.set("_filter_marketplaceId", JSON.stringify(this.marketPlaceId));
    u.set("_filter_author", JSON.stringify(this.author));
    u.set("_filter_asin", JSON.stringify(this.asin));
    u.set("_filter_date", JSON.stringify(this.date));
  }
}
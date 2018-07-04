import {RenderRequest} from "../RenderRequest";
import {DefaultFilter} from "../../util/filter/DefaultFilter";
import {MtdBookTypeFilter} from "./MtdBookTypeFilter";
import {MtdMonthFilter} from "./MtdMonthFilter";
import {KdpTarget} from "../KdpTarget";

export class LtdReportRequest extends RenderRequest {
  public marketPlaceId: DefaultFilter;
  public bookType: MtdBookTypeFilter;
  public month: MtdMonthFilter;

  constructor(
    target: Array<KdpTarget<any>>,
    locale: string,
    marketPlaceId: DefaultFilter,
    bookType: MtdBookTypeFilter,
    month: MtdMonthFilter
  ) {
    super([], target, locale, "KDPGetMTDReport_OP");
    this.marketPlaceId = marketPlaceId;
    this.bookType = bookType;
    this.month = month;
  }

  public fillUrlParams(u: URLSearchParams): void {
    super.fillUrlParams(u);
    u.set("_filter_marketplaceId", JSON.stringify(this.marketPlaceId));
    u.set("_filter_month", JSON.stringify(this.month));
    u.set("_filter_book_type", JSON.stringify(this.bookType));
  }
}
import {RenderRequest} from "../RenderRequest";
import {DefaultFilter} from "../../util/filter/DefaultFilter";
import {KdpTarget} from "../KdpTarget";

export class GetPaymentsRequest extends RenderRequest {
  public marketplaceID: DefaultFilter;
  public payStatus: DefaultFilter;
  public salesPeriod: DefaultFilter;

  constructor(
    target: Array<KdpTarget<any>>,
    locale: string,
    marketplaceID: DefaultFilter,
    payStatus: DefaultFilter,
    salesPeriod: DefaultFilter,
  ) {
    super([], target, locale, "KDPGetPayments_OP");
    this.marketplaceID = marketplaceID;
    this.payStatus = payStatus;
    this.salesPeriod = salesPeriod;
  }

  public fillUrlParams(u: URLSearchParams): void {
    super.fillUrlParams(u);
    u.set("_filter_marketplaceId", JSON.stringify(this.marketplaceID));
    u.set("_filter_payStatus", JSON.stringify(this.payStatus));
    u.set("_filter_salesPeriod", JSON.stringify(this.salesPeriod));
  }
}
import {PostAjax} from "../PostAjax";
import {LtdReportRequest} from "./LtdReportRequest";
import {DefaultFilter} from "../../util/filter/DefaultFilter";
import {KdpTarget} from "../KdpTarget";

export class LtdReportSalesChart extends LtdReportRequest {
  constructor(postAjax: Array<PostAjax>, target: Array<KdpTarget<any>>, locale: string, requestId: string, marketPlaceId: DefaultFilter, author: DefaultFilter, asin: DefaultFilter, date: DefaultFilter) {
    super(postAjax, target, locale, requestId, marketPlaceId, author, asin, date);
  }
}

export class LtdPageReads extends LtdReportRequest {
  constructor(postAjax: Array<PostAjax>, target: Array<KdpTarget<any>>, locale: string, requestId: string, marketPlaceId: DefaultFilter, author: DefaultFilter, asin: DefaultFilter, date: DefaultFilter) {
    super(postAjax, target, locale, requestId, marketPlaceId, author, asin, date);
  }
}

export class LtdRoyalties extends LtdReportRequest {
  constructor(postAjax: Array<PostAjax>, target: Array<KdpTarget<any>>, locale: string, requestId: string, marketPlaceId: DefaultFilter, author: DefaultFilter, asin: DefaultFilter, date: DefaultFilter) {
    super(postAjax, target, locale, requestId, marketPlaceId, author, asin, date);
  }
}
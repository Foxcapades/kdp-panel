import {ChartDataRequest} from "./ChartDataRequest";
import {PostAjax} from "../PostAjax";
import {DateFilter} from "../../util/filter/DateFilter";
import {DefaultFilter} from "../../util/filter/DefaultFilter";
import {KdpTarget} from "../KdpTarget";

export class RoyaltiesRequest extends ChartDataRequest {
  constructor(
    postAjax: Array<PostAjax>,
    target: Array<KdpTarget<any>>,
    locale: string,
    marketPlaceId: DefaultFilter,
    author: DefaultFilter,
    asin: DefaultFilter,
    reportDate: DateFilter,
    bookType: DefaultFilter
  ) {
    super(
      postAjax,
      target,
      locale,
      "KDPGetRoyaltyTable_OP",
      marketPlaceId,
      author,
      asin,
      reportDate,
      bookType
    );
  }
}
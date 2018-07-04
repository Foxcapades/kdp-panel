import {ChartDataRequest} from "./ChartDataRequest";
import {PostAjax} from "../PostAjax";
import {DefaultFilter} from "../../util/filter/DefaultFilter";
import {DateFilter} from "../../util/filter/DateFilter";
import {KdpTarget} from "../KdpTarget";

export class GetPageReadsRequest extends ChartDataRequest {
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
      "KDPGetLineChartKU_OP",
      marketPlaceId,
      author,
      asin,
      reportDate,
      bookType
    );
  }
}
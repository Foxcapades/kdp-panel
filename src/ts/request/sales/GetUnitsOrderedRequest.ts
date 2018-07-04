import {ChartDataRequest} from "./ChartDataRequest";
import {DateFilter} from "../../util/filter/DateFilter";
import {DefaultFilter} from "../../util/filter/DefaultFilter";
import {KdpTarget} from "../KdpTarget";

export class GetUnitsOrderedRequest extends ChartDataRequest {
  constructor(
    target: Array<KdpTarget<any>>,
    locale: string,
    marketPlaceId: DefaultFilter,
    author: DefaultFilter,
    asin: DefaultFilter,
    reportDate: DateFilter,
    bookType: DefaultFilter
  ) {
    super(
      [],
      target,
      locale,
      "KDPGetLineChart_OP",
      marketPlaceId,
      author,
      asin,
      reportDate,
      bookType
    );
  }
}
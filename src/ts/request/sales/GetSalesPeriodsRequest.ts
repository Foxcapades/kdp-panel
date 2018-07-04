import {RenderRequest} from "../RenderRequest";
import {KdpTarget} from "../KdpTarget";

export class GetSalesPeriodsRequest extends RenderRequest {
  constructor(
    target: Array<KdpTarget<any>>,
    locale: string,
  ) {
    super([], target, locale, "KDPGetSalesPeriods_OP");
  }
}
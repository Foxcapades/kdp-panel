import {RenderRequest} from "../RenderRequest";
import {KdpTarget} from "../KdpTarget";

export class GetAuthorsRequest extends RenderRequest {
  public constructor(target: Array<KdpTarget<any>>, locale: string) {
    super([], target, locale, "KDPGetAuthors_OP");
  }
}
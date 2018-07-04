import {KdpRequest} from "./KdpRequest";
import {RequestType} from "./RequestType";
import {PostAjax} from "./PostAjax";
import {KdpTarget} from "./KdpTarget";

export class RenderRequest extends KdpRequest {
  constructor(
    postAjax: Array<PostAjax>,
    target: Array<KdpTarget<any>>,
    locale: string,
    requestId: string
  ) {
    super(
      postAjax,
      target,
      RequestType.RENDER,
      locale,
      "KDP_UI_OP",
      requestId
    );
  }
}

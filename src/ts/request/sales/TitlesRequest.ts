import {RenderRequest} from "../RenderRequest";
import {DefaultFilter} from "../../util/filter/DefaultFilter";
import {KdpTarget} from "../KdpTarget";

export class TitlesRequest extends RenderRequest {
  public author: DefaultFilter;
  public bookType: DefaultFilter;

  public constructor(
    target: Array<KdpTarget<any>>,
    locale: string,
    author: DefaultFilter,
    bookType: DefaultFilter
  ) {
    super([], target, locale, "KDPGetTitles_OP");
    this.author = author;
    this.bookType = bookType;
  }

  public fillUrlParams(u: URLSearchParams): void {
    super.fillUrlParams(u);
    u.set("_filter_author", JSON.stringify(this.author));
    u.set("_filter_book_type", JSON.stringify(this.bookType));
  }
}


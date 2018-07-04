import Option from "./util/Option"

enum HistoricalOption {
  MARKETPLACE = "ltd-report-marketplace-dd",
  AUTHOR      = "ltd-report-author-dd",
  TITLE       = "ltd-report-title-dd",
  DATE_RANGE  = "ltd-report-date-range-dd",
}

function valueOf(a: HTMLSelectElement): string {
  return a.value;
}

export default class LifeToDate {
  public static getMarketPlace(): Option<string> {
    return Option.wrap(<HTMLSelectElement> document.getElementById(HistoricalOption.MARKETPLACE))
      .map(valueOf);
  }

  public static getAuthor(): Option<string> {
    return Option.wrap(<HTMLSelectElement> document.getElementById(HistoricalOption.AUTHOR))
      .map(valueOf);
  }

  public static getTitle(): Option<string> {
    return Option.wrap(<HTMLSelectElement> document.getElementById(HistoricalOption.TITLE))
      .map(valueOf)
  }

  public static getDateRange(): Option<string> {
    return Option.wrap(<HTMLSelectElement> document.getElementById(HistoricalOption.DATE_RANGE))
      .map(valueOf)
  }
}
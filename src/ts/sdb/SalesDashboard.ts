import Option from "../util/Option";

export enum Field {
  MARKETPLACE = "sales-dashboard-dd-mp",
  AUTHOR = "sales-dashboard-dd-author",
  FORMAT = "sales-dashboard-dd-book-type",
  TITLE = "sales-dashboard-dd-asin",
  DATE_RANGE = "sales-dashboard-date-range",

  UNITS_ORDERED_CHART = "sales-dashboard-chart-orders",
  PAGE_READS_CHART = "sales-dashboard-chart-ku",
}

enum DataSet {
  UNITS_ORDERED = "sales-dashboard-chart-orders",
}

function getValue(a: HTMLSelectElement): string {
  return a.value;
}

export class SalesDashboard {
  public static getMarketplace(): Option<string> {
    return Option.wrap(<HTMLSelectElement>document.getElementById(Field.MARKETPLACE))
      .map(getValue);
  }

  public static getAuthor(): Option<string> {
    return Option.wrap(<HTMLSelectElement>document.getElementById(Field.AUTHOR))
      .map(getValue);
  }

  public static getFormat(): Option<string> {
    return Option.wrap(<HTMLSelectElement>document.getElementById(Field.FORMAT))
      .map(getValue);
  }

  public static getTitle(): Option<string> {
    return Option.wrap(<HTMLSelectElement>document.getElementById(Field.TITLE))
      .map(getValue);
  }

  public static getDateRange(): Option<string> {
    return Option.wrap(<HTMLSelectElement>document.getElementById(Field.DATE_RANGE))
      .map(getValue);
  }
}
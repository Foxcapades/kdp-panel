import {
  KdpChartTarget,
} from "./request/KdpTarget";
import {Field} from "./sdb/SalesDashboard";
import {DefaultFilter} from "./util/filter/DefaultFilter";
import {DateFilter} from "./util/filter/DateFilter";
import {GetPageReadsRequest} from "./request/sales/GetPageReadsRequest";
import {RawApiResponse} from "./model/RawApiResponse";
import {FloatPane} from "./UI";

interface RequestCallback {
  (r: XMLHttpRequest): void;
}

const url = "https://kdp.amazon.com/en_US/reports-new/data";

// function getAuthors(cb: RequestCallback) {
//   const b = new URLSearchParams();
//   new GetAuthorsRequest([new KdpDDTarget(Field.AUTHOR)], "en_US").fillUrlParams(b);
//
//   const a = new XMLHttpRequest();
//   a.onreadystatechange = () => cb(a);
//   a.open("POST", url);
//   a.send(b);
// }

// function getUnitsOrdered(cb: RequestCallback) {
//   const b = new URLSearchParams();
//   new GetUnitsOrderedRequest(
//     [new KdpChartTarget(Field.UNITS_ORDERED_CHART, "DATE")],
//     "en_US",
//     new DefaultFilter("dropdown", ["_ALL"]),
//     new DefaultFilter("dynamic-dropdown", ["_ALL"]),
//     new DefaultFilter("dynamic-dropdown", ["_ALL"]),
//     new DateFilter("2018-06-01", "2018-07-01"),
//     new DefaultFilter("dropdown", ["_ALL"])
//   ).fillUrlParams(b);
//
//   const a = new XMLHttpRequest();
//   a.onreadystatechange = () => cb(a);
//   a.open("POST", url);
//   a.send(b);
// }

const jsCode: HTMLScriptElement = document.createElement('script');
jsCode.type = 'javascript';
jsCode.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js';
document.body.appendChild(jsCode);

function getPageReadsOrdered(cb: RequestCallback) {
  const b = new URLSearchParams();
  new GetPageReadsRequest(
    [],
    [new KdpChartTarget(Field.PAGE_READS_CHART, "DATE")],
    "en_US",
    new DefaultFilter("dropdown", ["_ALL"]),
    new DefaultFilter("dynamic-dropdown", ["_ALL"]),
    new DefaultFilter("dynamic-dropdown", ["_ALL"]),
    new DateFilter("2018-06-01", "2018-07-01"),
    new DefaultFilter("dropdown", ["_ALL"])
  ).fillUrlParams(b);

  const a = new XMLHttpRequest();
  a.onreadystatechange = () => {
    if (a.readyState === XMLHttpRequest.DONE)
      cb(a)
  };
  a.open("POST", url);
  a.send(b);
}

getPageReadsOrdered(a => {console.log(RawApiResponse.fromResponseText(a.responseText))});

const pane = new FloatPane();
pane.tabSet.appendChild(document.createElement("li"));
document.body.appendChild(pane);
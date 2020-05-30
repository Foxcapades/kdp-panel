import {TabNav} from "./TabNav";
import {Tab} from "./Tab";
import {TabContent} from "./TabContent";
import {Color} from "../colors";

const tpClass = 'fxcpds-tab-pane';
const sideBarWidth = "130px";
const stylesheet =
  `.${tpClass}{position:relative;height:100%;font-weight:1.1em}`
  + `.${TabNav.CLASS}{width:${sideBarWidth};background-color:${Color.LIGHT_GRAY};height:100%;position:relative}`
  + `.${TabContent.CLASS}{margin-left:${sideBarWidth}}`;

export class TabPane extends HTMLDivElement {
  public static CLASS = tpClass;

  private readonly navBar: TabNav;
  private readonly tabs: Array < Tab >;
  private readonly contentPane: TabContent;

  constructor() {
    super();
    this.navBar = new TabNav();
    this.contentPane = new TabContent();
    this.tabs = [];
    this.classList.add(TabPane.CLASS);

    const style = document.createElement("style");
    style.innerText = stylesheet;

    this.appendChild(style);
    this.appendChild(this.navBar);
    this.appendChild(this.contentPane);
  }

  public addTab(tab: Tab) {
    this.tabs.push(tab);
    this.navBar.appendChild(tab.title);
    this.contentPane.appendChild(tab.content)
  }
}
customElements.define("tab-pane", TabPane, {extends: "div"});
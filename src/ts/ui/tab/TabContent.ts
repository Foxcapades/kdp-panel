import {TabPane} from "./TabPane";

export class TabContent extends HTMLDivElement {
  public static CLASS = 'fxcpds-tab-content';

  constructor() {
    super();
    this.classList.add(TabContent.CLASS);
  }
}
customElements.define("tab-pane-content", TabContent, {extends: "div"});
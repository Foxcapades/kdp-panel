export class TabHeader extends HTMLButtonElement {
  public static CLASS = `fxcpds-tab-header`;
  constructor(title: string) {
    super();
    this.innerText = title;

    this.classList.add(TabHeader.CLASS);
  }
}
customElements.define("tab-header", TabHeader, {extends: "button"});
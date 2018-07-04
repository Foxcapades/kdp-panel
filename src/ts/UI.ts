export class FloatPane extends HTMLDivElement {
  public static ID = "fxcpds-float-pane";

  public readonly tabSet: TabSet;

  public constructor() {
    super();

    this.id = FloatPane.ID;
    this.style.position = "absolute";
    this.style.width = "800px";
    this.style.height = "600px";
    this.style.marginTop = "-300px";
    this.style.marginLeft = "-400px";
    this.style.top = "50vh";
    this.style.left = "50vw";
    this.style.zIndex = "9999";
    this.style.backgroundColor = "#FFF";
    this.style.borderRadius = "5px";
    this.style.borderWidth = "1px";
    this.style.borderColor = "#222";

    this.tabSet = new TabSet();
    this.appendChild(this.tabSet);
  }
}
window.customElements.define("float-pane", FloatPane, {extends: "div"});

export class TabPane extends

export class TabHeaderRow extends HTMLUListElement {
  public static ID = "fxcpds-tab-header-row";

  public content: HTMLDivElement;

  public constructor() {
    super();

    this.id = TabHeaderRow.ID;
    this.style.cssFloat = "left";
    this.style.display = "inline-block";
    this.style.height = "2em";

    this.content = document.createElement("div");
    this.content.style.position = "relative";
    this.content.style.marginTop = "2em";


    this.appendChild(this.content);
  }
}

window.customElements.define("tab-header-row", TabHeaderRow, {extends: "ul"});

export class TabSet extends HTMLDivElement {
  public static ID = "fxcpds-tab-set";

  public headers: TabHeaderRow;
  public placeholder: HTMLDivElement;

  public constructor() {
    super();

    this.id = TabSet.ID;
    this.headers = new TabHeaderRow();
    this.placeholder = document.createElement("div");

    this.style.position = "relative";
    this.style.width = "90%";

    this.appendChild(this.headers);
    this.appendChild(this.placeholder);
  }
}

window.customElements.define("tab-set", TabSet, {extends: "div"});

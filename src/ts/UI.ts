export class FloatPane extends HTMLDivElement {
  public static ID = "fxcpds-float-pane";

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
  }
}
window.customElements.define("float-pane", FloatPane, {extends: "div"});

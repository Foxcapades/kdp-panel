import {Color} from "../colors";
import {TabHeader} from "./TabHeader";

const buttonPadding = "8px 16px";
const stylesheet =
  `.${TabHeader.CLASS}:hover{background-color:${Color.OFF_WHITE}}`
  + `.${TabHeader.CLASS}.current{background-color:${Color.ORANGE}}`
  + `.${TabHeader.CLASS}{`
  +      `background-color:transparent;`
  +      `text-align:right;`
  +      `position:relative;`
  +      `border:none;`
  +      `padding:${buttonPadding};`
  +      `width:100%;`
  +      `display:block;`
  +      `outline:0}`;

export class TabNav extends HTMLDivElement {
  public static CLASS = 'fxcpds-tab-nav';

  constructor() {
    super();

    this.classList.add(TabNav.CLASS);
    this.style.width = "100px";
    this.style.cssFloat = "left";
    this.style.padding = "0";

    const tmp = document.createElement('style');
    tmp.type = 'text/css';
    tmp.innerText = stylesheet;
    this.appendChild(tmp);
  }

  public clear(): void {
    const len = this.children.length;
    for (let i = 0; i < len; i++)
      this.removeChild(this.children[i]);
  }
}
customElements.define("tab-nav", TabNav, {extends: "div"});
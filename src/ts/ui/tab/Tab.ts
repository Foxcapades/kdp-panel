import {TabHeader} from "./TabHeader";

export class Tab {
  public readonly title: TabHeader;
  public readonly content: HTMLDivElement;

  constructor(title: string, content: HTMLDivElement) {
    this.title = new TabHeader(title);
    this.content = content;
    this.content.classList.add();
  }
}
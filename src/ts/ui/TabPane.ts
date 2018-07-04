export class TabPane extends HTMLDivElement {
  private readonly navBar: TabPaneNavigation;
  private readonly tabs: Array < Tab >;

  constructor() {
    super();
    this.navBar = new TabPaneNavigation();
    this.tabs = [];
  }

  public addTab(tab: Tab) {

  }
}

class TabHeader extends HTMLButtonElement {
  constructor(title: string) {
    super();
    this.innerText = title;

    this.style.backgroundColor = ""
  }
}

export class Tab {
  private readonly title: TabHeader;
  private readonly content: HTMLDivElement;

  constructor(title: string, content: HTMLDivElement) {
    this.title = document.createElement("button");
    this.content = content;
  }
}

class TabPaneNavigation extends HTMLDivElement {
  private readonly buttons: Array < HTMLButtonElement >;

  constructor() {
    super();
    this.buttons = [];
  }

  public render(): void {
    this.clear();

    for (let i = 0; i < this.buttons.length; i++)
      this.appendChild(this.buttons[i]);
  }

  private clear(): void {
    const len = this.children.length;
    for (let i = 0; i < len; i++)
      this.removeChild(this.children[i]);
  }
}
import document from "document";

import FileStore from "fileStore";

export default class UI {
  
  constructor() {
    this.colorConfigurableElements = document.getElementsByClassName("colorConfigurable");
    this.fileStore = new FileStore();
  }
  
  updateColor(color) {
    this.colorConfigurableElements.forEach((element) => {
      element.style.fill = color;
    });
  }
  
  restore() {
    let color = this.fileStore.getColor();
    this.updateColor(color);
  }
  
}
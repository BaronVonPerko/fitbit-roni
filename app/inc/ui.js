import document from "document";

export default class UI {
  
  constructor(filestore) {
    this.colorConfigurableElements = document.getElementsByClassName("colorConfigurable");
    this.fileStore = filestore;
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
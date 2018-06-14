import * as fs from "fs";

export default class FileStore {
  
  constructor() {
    this.filename = "roni.txt";
    this.filetype = "json";
  }
  
  storeData(color) {
    let data = {
      color: color
    };
    
    fs.writeFileSync(this.filename, data, this.filetype);
  }
  
  getColor() {
    try {
      return fs.readFileSync(this.filename, this.filetype).color;
    } catch(e) {
      this.storeData("magenta");
      return "magenta";
    }
  }
  
}
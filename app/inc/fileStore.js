import * as fs from "fs";

export default class FileStore {
  
  constructor() {
    this.filename = "roni.txt";
    this.filetype = "json";
  }
  
  storeColor(color) {
    let data = {
      color,
      versionNotes: '1.1.0',
    };
    
    fs.writeFileSync(this.filename, data, this.filetype);
  }
  
  storeVersionNotes(versionNotes) {
    let data = {
      color: this.getColor(),
      versionNotes
    };
    
    fs.writeFileSync(this.filename, data, this.filetype);
  }
  
  getColor() {
    try {
      return fs.readFileSync(this.filename, this.filetype).color;
    } catch(e) {
      this.storeColor("magenta");
      return "magenta";
    }
  }
  
  getVersionNotes() {
    try {
      return fs.readFileSync(this.filename, this.filetype).versionNotes === '1.1.0';
    } catch(e) {
      console.log(e);
      return false;
    }
  }
  
}
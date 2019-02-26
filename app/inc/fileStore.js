import * as fs from "fs";

const FILENAME = 'roni.txt';
const FILETYPE = 'json';

const DEFAULT_MODEL = {
  color: 'magenta',
  displaySeconds: true,
};

export default class FileStore {
  constructor() {
    try {
      this.model = fs.readFileSync(FILENAME, FILETYPE);
    } catch (e) {
      console.error(e);
      this.model = DEFAULT_MODEL;
      this.saveModel();
    }
  }

  getValue(key, defaultValue) {
    if (this.model.key === undefined) {
      return defaultValue;
    } else {
      return this.model.key;
    }
  }

  setValue(key, value) {
    this.model[key] = value;
  }

  saveModel() {
    fs.writeFileSync(FILENAME, this.model, FILETYPE);
  }

  storeColor(color) {
    this.setValue('color', color);
  }

  getColor() {
    return this.getValue('color', 'magenta');
  }
}

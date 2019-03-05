import * as fs from "fs";

const FILENAME = 'roni.txt';
const FILETYPE = 'json';

const DEFAULT_MODEL = {
  color: 'magenta',
  displaySeconds: true,
};

export default class FileStore {
  constructor() {
    console.log('FileStore.ctor 1');
    try {
      this.model = fs.readFileSync(FILENAME, FILETYPE);
      console.log(`FileStore.ctor model: ${JSON.stringify(this.model)}`);
    } catch (e) {
      console.error('FileStore.ctor error', e);
      this.model = DEFAULT_MODEL;
      this.saveModel();
    }
  }

  getValue(key, defaultValue) {
    console.log(`FileStore.getValue key:${key} defaultValue:${defaultValue}`);
    if (this.model[key] === undefined) {
      console.log('FileStore.getValue return default');
      return defaultValue;
    } else {
      console.log(`FileStore.getValue return model value '${this.model[key]}'`);
      return this.model[key];
    }
  }

  setValue(key, value) {
    console.log(`FileStore.setValue key:${key} value:${value}`);
    this.model[key] = value;
    this.saveModel();
  }

  saveModel() {
    try {
      fs.writeFileSync(FILENAME, this.model, FILETYPE);
    } catch (e) {
      console.error('FileStore.saveModel err', e);
    }
  }

  storeColor(color) {
    this.setValue('color', color);
  }

  getColor() {
    return this.getValue('color', 'magenta');
  }
}

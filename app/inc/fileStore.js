import * as fs from "fs";

const FILENAME = "roni.txt";
const FILETYPE = "json";

export const KEY_COLOR = "color";
export const KEY_DISPLAY_SECONDS = "displaySeconds";
export const KEY_DISPLAY_BATTERY = "displayBattery";
export const KEY_DATE_FORMAT = "dateFormat";
export const KEY_UI_STATE = "uiState";
export const VAL_UI_STATE_STEPS = "steps";
export const VAL_UI_STATE_HEART = "heart";
export const VAL_UI_STATE_CALS = "cals";
export const KEY_CLOCK_SIZE = "clockSize";

const DEFAULT_MODEL = {
  [KEY_COLOR]: "magenta",
  [KEY_DISPLAY_SECONDS]: false,
  [KEY_DISPLAY_BATTERY]: true,
  [KEY_DATE_FORMAT]: { selected: 2 },
  [KEY_UI_STATE]: VAL_UI_STATE_STEPS,
  [KEY_CLOCK_SIZE]: { selected: 0 },
};

export default class FileStore {
  static instance = new FileStore();

  constructor() {
    try {
      this.model = fs.readFileSync(FILENAME, FILETYPE);
    } catch (e) {
      console.error(
        "FileStore encountered error on load, using default state.",
        e
      );
      this.model = DEFAULT_MODEL;
      this.saveModel();
    }
  }

  getValue(key) {
    if (this.model[key] === undefined) {
      return DEFAULT_MODEL[key];
    } else {
      return this.model[key];
    }
  }

  setValue(key, value) {
    this.model[key] = value;
    this.saveModel();
  }

  saveModel() {
    try {
      fs.writeFileSync(FILENAME, this.model, FILETYPE);
    } catch (e) {
      console.error("FileStore encountered an error when saving:", e);
    }
  }
}

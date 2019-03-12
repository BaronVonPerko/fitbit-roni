import document from 'document';
import HeartRate from './heartrate';
import Steps from './steps';
import { touchListener } from './touchListener';
import FileStore, {
  KEY_COLOR,
  KEY_UI_STATE,
  VAL_UI_STATE_STEPS,
  VAL_UI_STATE_HEART,
} from './fileStore';

export default class UI {
  static instance = new UI();

  constructor() {
    this.colorConfigurableElements = document.getElementsByClassName('colorConfigurable');

    this.steps = new Steps();
    this.heartrate = new HeartRate();

    document.getElementById('tapzone').onclick = this.onClick.bind(this);
  }

  updateColor(color) {
    this.colorConfigurableElements.forEach((element) => {
      element.style.fill = color;
    });
  }

  restore() {
    const color = FileStore.instance.getValue(KEY_COLOR);
    this.updateColor(color);
    this.setState(FileStore.instance.getValue(KEY_UI_STATE), false);
  }

  onClick() {
    this.setState(
      FileStore.instance.getValue(KEY_UI_STATE) === VAL_UI_STATE_HEART
        ? VAL_UI_STATE_STEPS
        : VAL_UI_STATE_HEART,
      true,
    );
  }

  setState(newState, save) {
    switch (newState) {
      case VAL_UI_STATE_STEPS:
        this.steps.start();
        this.heartrate.stop();
        break;
      case VAL_UI_STATE_HEART:
        this.steps.stop();
        this.heartrate.start();
        break;
    }
    if (save) {
      FileStore.instance.setValue(KEY_UI_STATE, newState);
    }
  }
}

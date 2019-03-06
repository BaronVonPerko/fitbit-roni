import document from 'document';
import HeartRate from './heartrate';
import Steps from './steps';
import { touchListener } from './touchListener';
import FileStore, { KEY_UI_STATE, VAL_UI_STATE_STEPS, VAL_UI_STATE_HEART } from './fileStore';

export default class UI {
  constructor() {
    this.colorConfigurableElements = document.getElementsByClassName('colorConfigurable');
    console.log(`ui.ctor fileStore:${FileStore.instance}`);

    this.steps = new Steps();
    this.heartrate = new HeartRate();

    document.getElementById('root').onclick = this.onClick.bind(this);
  }

  updateColor(color) {
    this.colorConfigurableElements.forEach((element) => {
      element.style.fill = color;
    });
  }

  restore() {
    let color = FileStore.instance.getColor();
    this.updateColor(color);
    this.setState(FileStore.instance.getValue(KEY_UI_STATE), false);
  }

  onClick() {
    console.log(`ui.onClick this:${JSON.stringify(this)} fileStore: ${FileStore.instance}`);
    this.setState(
      FileStore.instance.getValue(KEY_UI_STATE) === VAL_UI_STATE_HEART
        ? VAL_UI_STATE_STEPS
        : VAL_UI_STATE_HEART,
      true,
    );
  }

  setState(newState, save) {
    console.log(`ui.setState: ${newState}`);
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

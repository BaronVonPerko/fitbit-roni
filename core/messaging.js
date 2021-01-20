import * as messaging from "messaging";

import FileStore from "./fileStore";
import UI from "./ui";
import Clock from './clock';
import
{
  KEY_CLOCK_SIZE,
  KEY_COLOR,
  KEY_DISPLAY_SECONDS
} from "./common/constants";

export default class Messaging {
  static run() {
    const fileStore = FileStore.instance;
    const ui = UI.instance;

    // Message socket opens
    messaging.peerSocket.onopen = () => {
      console.log("App Socket Open");
    };

    // Message socket closes
    messaging.peerSocket.onclose = () => {
      console.log("App Socket Closed");
    };

    messaging.peerSocket.onmessage = evt => {
      console.log(evt.data.key + " : " + evt.data.newValue);
      if (!evt.data.newValue) return;
      const data = JSON.parse(evt.data.newValue);
      fileStore.setValue(evt.data.key, data);

      switch (evt.data.key) {
        case KEY_COLOR: {
          ui.updateColor(data);
          break;
        }
        case KEY_DISPLAY_SECONDS: {
          Clock.instance.setDisplaySeconds(data);
          break;
        }
        case KEY_CLOCK_SIZE: {
          Clock.instance.setClockSize(data);
          break;
        }
      }
    };
  }
}

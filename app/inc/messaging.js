import * as messaging from "messaging";

import FileStore from "./fileStore";
import UI from "./ui";
import Clock from './clock';

export default class Messaging {
  static run() {
    let fileStore = new FileStore();
    let ui = new UI();

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

      switch (evt.data.key) {
        case 'color': {
          fileStore.storeColor(data);
          ui.updateColor(data);
          break;
        } case 'displaySeconds': {
          fileStore.setValue(evt.data.key, data);
          Clock.instance.setDisplaySeconds(data);
          break;
        }
      }
    };
  }
}

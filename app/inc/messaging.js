import * as messaging from "messaging";

import FileStore from "fileStore";
import UI from "ui";

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
    
    messaging.peerSocket.onmessage = (evt) => {
      
      console.log(evt.data.key + " : " + evt.data.newValue);

      if (evt.data.key === "color" && evt.data.newValue) {
        let color = JSON.parse(evt.data.newValue);
        
        fileStore.storeData(color);
        
        ui.updateColor(color);
      }

    }
    
  }

}
import * as messaging from "messaging";
import document from "document";


export default class Messaging {
  
  static run() {
    
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

        document.getElementsByClassName("colorConfigurable").forEach((element) => {
          element.style.fill = color;
        });
      }

    }
    
  }

}
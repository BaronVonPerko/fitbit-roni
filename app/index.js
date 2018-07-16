import Battery from "inc/battery";
import Clock from "inc/clock";
import HeartRate from "inc/heartrate";
import Messaging from "inc/messaging";
import Steps from "inc/steps";
import UI from "inc/ui";

import document from "document";


new UI().restore();

let steps = new Steps();
steps.run();

let heartrate = new HeartRate();

Battery.run();
Clock.run();
Messaging.run();

let state = 'steps';
heartrate.hide();

document.getElementById('root').onclick = () => {
  
  switch(state) {
    case 'steps':
      steps.hide();
      heartrate.start();
      state = 'heart';
      break;
    case 'heart':
      steps.show();
      heartrate.stop();
      state = 'steps';
      break;
  }
  
  
};
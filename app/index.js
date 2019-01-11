import Battery from "inc/battery";
import Clock from "inc/clock";
import FileStore from "inc/fileStore";
import HeartRate from "inc/heartrate";
import Messaging from "inc/messaging";
import Steps from "inc/steps";
import UI from "inc/ui";

import { showVersionNotes, hideVersionNotes } from "inc/versionNotes";
import { touchListener } from "inc/touchListener";

import analytics from "fitbit-google-analytics/app"
 
analytics.configure({
  tracking_id: "UA-26651291-17"
});

let state = 'steps';

let fileStore = new FileStore();

let hasNotes = fileStore.getVersionNotes();
// if(hasNotes) {
  // hideVersionNotes();
// } else {
  // showVersionNotes();
  // state = 'notes';
// }

new UI(fileStore).restore();

let steps = new Steps();
steps.run();

let heartrate = new HeartRate();
heartrate.hide();

touchListener(steps, heartrate, state);


Battery.run();
Clock.run();
Messaging.run();
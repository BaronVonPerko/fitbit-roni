import Battery from "./inc/battery";
import Clock from "./inc/clock";
import HeartRate from "./inc/heartrate";
import Messaging from "./inc/messaging";
import Steps from "./inc/steps";
import UI from "./inc/ui";
import FileStore from "./inc/fileStore";
import { touchListener } from "./inc/touchListener";

import analytics from "fitbit-google-analytics/app";

analytics.configure({
  tracking_id: "UA-26651291-17"
});

let state = "steps";

let fileStore = new FileStore();

new UI(fileStore).restore();

let steps = new Steps();
steps.run();

let heartrate = new HeartRate();
heartrate.hide();

touchListener(steps, heartrate, state);

Battery.run();
Clock.run(fileStore);
Messaging.run();

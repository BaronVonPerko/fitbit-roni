import Battery from "inc/battery";
import Clock from "inc/clock";
import HeartRate from "inc/heartrate";
import Messaging from "inc/messaging";
import Steps from "inc/steps";
import UI from "inc/ui";

import { touchListener } from "inc/touchListener";


new UI().restore();

let steps = new Steps();
steps.run();

let heartrate = new HeartRate();
heartrate.hide();

touchListener(steps, heartrate);


Battery.run();
Clock.run();
Messaging.run();

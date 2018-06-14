import Battery from "inc/battery";
import Clock from "inc/clock";
import Messaging from "inc/messaging";
import Steps from "inc/steps";
import UI from "inc/ui";

new UI().restore();

Battery.run();
Clock.run();
Messaging.run();
Steps.run();
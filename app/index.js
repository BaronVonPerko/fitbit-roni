import Battery from "./inc/battery";
import Clock from "./inc/clock";
import Messaging from "./inc/messaging";
import UI from "./inc/ui";
import FileStore from "./inc/fileStore";

import analytics from "fitbit-google-analytics/app";

//TODO change this
// analytics.configure({
//   tracking_id: "UA-26651291-17"
// });

UI.instance.restore();

Battery.run();
Clock.run(FileStore.instance);
Messaging.run();

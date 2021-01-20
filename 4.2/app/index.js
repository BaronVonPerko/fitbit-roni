import Battery from "../../core/battery";
import Clock from "../../core/clock";
import Messaging from "../../core/messaging";
import UI from "../../core/ui";
import FileStore from "../../core/fileStore";

import analytics from "fitbit-google-analytics/app";

analytics.configure({
  tracking_id: "UA-26651291-17"
});

UI.instance.restore();

Battery.run();
Clock.run(FileStore.instance);
Messaging.run();

import Battery from "./inc/battery";
import Clock from "./inc/clock";
import Messaging from "./inc/messaging";
import UI from "./inc/ui";
import FileStore from "./inc/fileStore";

//import analytics from "fitbit-google-analytics/app";

/*analytics.configure(
{
	tracking_id: "UA-26651291-17"
});*/

import
{
	me as device
} from "device";
if (!device.screen) device.screen =
{
	width: 348,
	height: 250
};

UI.instance.restore();

Battery.run();
Clock.run(FileStore.instance);
Messaging.run();
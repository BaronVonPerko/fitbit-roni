import * as messaging from "messaging";
import Clock from "inc/clock";
import Steps from "inc/steps";
import Battery from "inc/battery";

messaging.peerSocket.onmessage = function(evt) {
  console.log(evt.data.value);
  // myElement.style.fill = evt.data.value;
}

Clock.run();


let steps = new Steps();
let battery = new Battery();

function update() {
  steps.update();
  battery.update();
}
update();

setInterval(() => update(), 1000);
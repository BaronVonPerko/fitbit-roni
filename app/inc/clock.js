import clock from "clock";
import { preferences } from "user-settings";
import { today } from "user-activity";
import * as util from "../../common/utils";
import document from "document";

export default class Clock {

  constructor() {
    this.txtClock = document.getElementById("clock");
    this.txtClockSec = document.getElementById("clockSec");
    this.txtAMPM = document.getElementById("clockAMPM");
    this.txtDate = document.getElementById("date");
  }

  setDisplaySeconds(displaySeconds) {
    const granularity = displaySeconds ? 'seconds' : 'minutes';
    clock.granularity = granularity;
    if (displaySeconds) {
      this.txtClockSec.style.opacity = 1;
    } else {
      this.txtClockSec.style.opacity = 0;
    }
  }

  init(fileStore) {
    this.setDisplaySeconds(fileStore.getValue('displaySeconds', true));

    // Update the clock / date every tick
    clock.ontick = (evt) => {
      const today = evt.date;
      let hours = today.getHours();
      let ampm = "";

      if (preferences.clockDisplay === "12h") {
        // 12h format
        ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
      } else {
        // 24h format
        hours = util.zeroPad(hours);
      }

      // Print the clock
      const mins = util.zeroPad(today.getMinutes());
      const secs = util.zeroPad(today.getSeconds());
      const sideTextX = hours.toString().length > 1 ? 240 : 220;
      this.txtClock.text = `${hours}:${mins}`;
      this.txtClockSec.text = secs;
      this.txtAMPM.text = `${ampm}`;
      this.txtClockSec.x = sideTextX;
      this.txtAMPM.x = sideTextX;

      // Print the date
      const date = new Date();
      const dayOfWeek = util.dayOfWeek(date.getDay());
      const month = date.getMonth();
      const day = date.getDate();
      const year = date.getFullYear();
      this.txtDate.text = `${dayOfWeek}   ${month}/${day}/${year}`;
    }

  }

  static instance = new Clock();

  static run(fileStore) {
    Clock.instance.init(fileStore);
  }

}

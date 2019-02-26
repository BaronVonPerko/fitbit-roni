import clock from "clock";
import { preferences } from "user-settings";
import { today } from "user-activity";
import * as util from "../../common/utils";
import document from "document";

export default class Clock {

  constructor() {
    // Update the clock every minute
    clock.granularity = "seconds";

    this.txtClock = document.getElementById("clock");
    this.txtClockSec = document.getElementById("clockSec");
    this.txtAMPM = document.getElementById("clockAMPM");
    this.txtDate = document.getElementById("date");
  }

  init() {

    // Update the clock / date every tick
    clock.ontick = (evt) => {
      const today = evt.date;
      let hours = today.getHours();
      let ampm = "";

      if (preferences.clockDisplay === "12h") {
        // 12h format
        ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        this.txtClockSec.style.opacity = 1;
      } else {
        // 24h format
        hours = util.zeroPad(hours);
        this.txtClockSec.style.opacity = 0;
      }

      // Print the clock
      const mins = util.zeroPad(today.getMinutes());
      const secs = util.zeroPad(today.getSeconds());
      this.txtClock.text = `${hours}:${mins}`;
      this.txtClockSec.text = secs;
      this.txtAMPM.text = `${ampm}`;
      this.txtAMPM.x = hours.toString().length > 1 ? 240 : 220;

      // Print the date
      const date = new Date();
      const dayOfWeek = util.dayOfWeek(date.getDay());
      const month = date.getMonth();
      const day = date.getDate();
      const year = date.getFullYear();
      this.txtDate.text = `${dayOfWeek}   ${month}/${day}/${year}`;
    }

  }

  static run() {
    new Clock().init();
  }

}

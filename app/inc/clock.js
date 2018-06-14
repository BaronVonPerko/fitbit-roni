import clock from "clock";
import { preferences } from "user-settings";
import { today } from "user-activity";
import * as util from "../../common/utils";
import document from "document";

export default class Clock {
  
  constructor() {
    // Update the clock every minute
    clock.granularity = "minutes";
    
    this.txtClock = document.getElementById("clock");
    this.txtAMPM = document.getElementById("clockAMPM");
    this.txtDate = document.getElementById("date");
  }

  init() {
    
    // Update the clock / date every tick
    clock.ontick = (evt) => {
      let today = evt.date;
      let hours = today.getHours();
      let ampm = "";

      if (preferences.clockDisplay === "12h") {
        // 12h format
        ampm = hours > 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
      } else {
        // 24h format
        hours = util.zeroPad(hours);
      }

      // Print the clock
      let mins = util.zeroPad(today.getMinutes());
      this.txtClock.text = `${hours}:${mins}`;
      this.txtAMPM.text = `${ampm}`;
      this.txtAMPM.x = hours.toString().length > 1 ? 240 : 220;

      // Print the date
      let date = new Date();
      let dayOfWeek = util.dayOfWeek(date.getDay());
      let month = util.nameOfMonth(date.getMonth());
      let day = date.getDate();
      this.txtDate.text = `${dayOfWeek}   ${month} ${day}`;
    }

  }

  static run() {
    new Clock().init();
  }
  
}
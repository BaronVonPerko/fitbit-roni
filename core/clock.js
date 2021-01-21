import clock from "clock";
import {preferences} from "user-settings";
import * as util from "./common/utils";
import document from "document";
import {
  DATE_FORMATS,
  DATE_FORMAT_MM_DD_YYYY,
  DATE_FORMAT_DD_MM_YYYY,
  DATE_FORMAT_MON_DD,
  DATE_FORMAT_DD_MON,
  CLOCK_SIZES,
  CLOCK_SIZE_NORMAL,
  CLOCK_SIZE_LARGE,
  KEY_CLOCK_SIZE,
  KEY_DATE_FORMAT,
  KEY_DISPLAY_SECONDS
} from '../../common/constants';

export default class Clock {
  constructor() {
    this.txtClock = document.getElementById("clock");
    this.txtClockSec = document.getElementById("clockSec");
    this.txtAMPM = document.getElementById("clockAMPM");
    this.txtDate = document.getElementById("date");
  }

  setDisplaySeconds(displaySeconds) {
    clock.granularity = displaySeconds ? 'seconds' : 'minutes';
    this.txtClockSec.style.opacity = displaySeconds ? 1 : 0;
  }

  setClockSize(clockSizeObject) {
    const clockSize = CLOCK_SIZES[clockSizeObject.selected];
    switch (clockSize) {
      case CLOCK_SIZE_NORMAL:
        this.txtClock.style.fontSize = 80;
        break;
      case CLOCK_SIZE_LARGE:
        this.txtClock.style.fontSize = 100;
        break;
    }
  }

  init(fileStore) {
    this.setDisplaySeconds(fileStore.getValue(KEY_DISPLAY_SECONDS));
    this.setClockSize(fileStore.getValue(KEY_CLOCK_SIZE));

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
      const sideTextX = hours.toString().length > 1 ? 244 : 220;
      this.txtClock.text = `${hours}:${mins}`;
      this.txtClockSec.text = secs;
      this.txtAMPM.text = `${ampm}`;
      this.txtClockSec.x = sideTextX;
      this.txtAMPM.x = sideTextX;

      // Print the date
      const date = new Date();
      const dayOfWeek = util.dayOfWeek(date.getDay());
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const year = date.getFullYear();
      const dateFormatObject = fileStore.getValue(KEY_DATE_FORMAT);
      const dateFormat = DATE_FORMATS[dateFormatObject.selected];
      let dateString;
      switch (dateFormat) {
        default: {
          console.error(`Unknown date format ${dateFormat}`);
          // Fallthrough to default format
        }
        case DATE_FORMAT_MM_DD_YYYY: {
          dateString = `${month}/${day}/${year}`;
          break;
        }
        case DATE_FORMAT_DD_MM_YYYY: {
          dateString = `${day}/${month}/${year}`;
          break;
        }
        case DATE_FORMAT_MON_DD: {
          const monthName = util.nameOfMonth(date.getMonth());
          dateString = `${monthName} ${day}`;
          break;
        }
        case DATE_FORMAT_DD_MON: {
          const monthName = util.nameOfMonth(date.getMonth());
          dateString = `${day} ${monthName}`;
          break;
        }
      }
      this.txtDate.text = `${dayOfWeek} ${dateString}`;
    }
  }

  static instance = new Clock();

  static run(fileStore) {
    Clock.instance.init(fileStore);
  }
}

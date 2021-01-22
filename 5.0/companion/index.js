import * as messaging from "messaging";
import {settingsStorage} from "settings";

import "fitbit-google-analytics/companion";
import {DEFAULT_MODEL} from "../../core/common/constants";

// Message socket opens
messaging.peerSocket.onopen = () => {
  restoreSettings();
};

// Message socket closes
messaging.peerSocket.onclose = () => {
  //
};

// A user changes settings
settingsStorage.onchange = evt => {
  let data = {
    key: evt.key,
    newValue: evt.newValue
  };
  sendVal(data);
};

// Restore any previously saved settings and send to the device
function restoreSettings() {
  if (settingsStorage.length === 0) {
    restoreDefaults();
  }

  for (let index = 0; index < settingsStorage.length; index++) {
    let key = settingsStorage.key(index);
    if (key) {
      let data = {
        key: key,
        newValue: settingsStorage.getItem(key)
      };
      sendVal(data);
    }
  }
}

function restoreDefaults() {
  console.log('Restoring default values for Companion');

  const keys = Object.keys(DEFAULT_MODEL)

  keys.forEach(key => {
    console.log(`${key} | ${DEFAULT_MODEL[key]}`);
    settingsStorage.setItem(key, DEFAULT_MODEL[key]);
  })
}

// Send data to device using Messaging API
function sendVal(data) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  }
}

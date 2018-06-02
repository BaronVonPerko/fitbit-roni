import document from "document";
import { battery } from "power";


export default class Battery {
  
  constructor() {
    this.txtBattery = document.getElementById("battery");
  }
  
  update() {
    let batteryChargeLevel = Math.floor(battery.chargeLevel);
    
    this.txtBattery.text = `${batteryChargeLevel}%`;
  }

  
}
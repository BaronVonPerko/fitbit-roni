import document from "document";
import { battery } from "power";


export default class Battery {
  
  constructor() {
    this.txtBattery = document.getElementById("battery");
    this.imgBattery = document.getElementById("battery_img");
  }
  
  update() {
    let batteryChargeLevel = Math.floor(battery.chargeLevel);
    
    if(batteryChargeLevel > 0) {
      this.imgBattery.href="icons/battery_solid_25_24px.png";
    }
    
    if(batteryChargeLevel > 25) {
      this.imgBattery.href="icons/battery_solid_50_24px.png";
    }
    
    if(batteryChargeLevel > 50) {
      this.imgBattery.href="icons/battery_solid_75_24px.png";
    }
    
    if(batteryChargeLevel > 75) {
      this.imgBattery.href="icons/battery_solid_24px.png";
    }
    
    this.txtBattery.text = `${batteryChargeLevel}%`;
  }
  
  static run() {
    let battery = new Battery();
    
    battery.update();
    
    setInterval(() => battery.update(), 10000);
  }

  
}
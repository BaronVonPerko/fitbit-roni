import document from "document";
import { battery, charger } from "power";


export default class Battery {
  
  constructor() {
    this.txtBattery = document.getElementById("battery");
    this.imgBattery = document.getElementById("battery_img");
  }
  
  update() {
    let batteryChargeLevel = Math.floor(battery.chargeLevel);
    
    if(batteryChargeLevel > 25) {
      this.imgBattery.href="icons/battery_solid_25_24px.png";
    }
    
    if(batteryChargeLevel > 50) {
      this.imgBattery.href="icons/battery_solid_50_24px.png";
    }
    
    if(batteryChargeLevel > 75) {
      this.imgBattery.href="icons/battery_solid_75_24px.png";
    }
    
    if(batteryChargeLevel > 90) {
      this.imgBattery.href="icons/battery_solid_24px.png";
    }
    
    // use the OS battery icon instead
    if(batteryChargeLevel <= 25) {
      this.hideIcon();
    } else {
      this.showIcon();
    }
    
    this.txtBattery.text = `${batteryChargeLevel}%`;
  }
  
  watchCharger() {
    charger.onchange = () => {
      if(charger.connected) {
        this.hideIcon();
      } else {
        this.showIcon();
      }
    };
  }
  
  hideIcon() {
    this.imgBattery.style.display = 'none';
  }
  
  showIcon() {
    setTimeout(() => {
      this.imgBattery.style.display = 'inline';
    }, 1500);  // give it a little time because the OS icon may still be showing
  }
  
  static run() {
    let battery = new Battery();
    
    battery.update();
    battery.watchCharger();
    
    setInterval(() => battery.update(), 10000);
  }

  
}
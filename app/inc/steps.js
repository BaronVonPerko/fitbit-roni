import document from "document";
import { today } from "user-activity";


export default class Steps {
  
  constructor() {
    this.txtSteps = document.getElementById("steps");
    this.imgSteps = document.getElementById("steps_img");
    this.root = document.getElementById('root');
  }
  
  update() {
    let steps = today.local.steps.toString();
    this.txtSteps.text = steps;
    this.imgSteps.x = this.root.width - 35 - (18 * steps.length);
  }
  
  hide() {
    this.txtSteps.style.opacity = 0;
    this.imgSteps.style.opacity = 0;
  }
  
  show() {
    this.txtSteps.style.opacity = 1;
    this.imgSteps.style.opacity = 1;
  }
  
  run() {    
    this.update();
    
    setInterval(() => this.update(), 2000);
  }
  
}
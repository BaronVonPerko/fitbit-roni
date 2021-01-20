import document from "document";
import
{
  today,
  goals
} from "user-activity";
import * as util from "./common/utils";

export default class Steps
{
  constructor()
  {
    this.txtSteps = document.getElementById("steps");
    this.imgSteps = document.getElementById("steps_img");
    this.gaugeSteps = document.getElementById("steps_gauge");
    this.root = document.getElementById('root');
  }

  update()
  {
    const steps = today.local.steps.toString();
    const goalCompletionNormal = today.local.steps / goals.steps;
    const gaugeSweepAngle = util.mapNumber(goalCompletionNormal, 0, 1, 0, 360);
    const stepIconX = this.root.width - 40 - (18 * steps.length);
    this.txtSteps.text = steps.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.imgSteps.x = stepIconX;
    this.gaugeSteps.x = stepIconX - (this.imgSteps.width / 2) + 2;
    this.gaugeSteps.sweepAngle = gaugeSweepAngle;
  }

  hide()
  {
    this.txtSteps.style.opacity = 0;
    this.imgSteps.style.opacity = 0;
    this.gaugeSteps.style.opacity = 0;
  }

  show()
  {
    this.txtSteps.style.opacity = 1;
    this.imgSteps.style.opacity = 1;
    this.gaugeSteps.style.opacity = 1;
  }

  start()
  {
    this.update();

    this.interval = setInterval(() => this.update(), 2000);
    this.show();
  }

  stop()
  {
    clearInterval(this.interval);
    this.interval = null;
    this.hide();
  }
}

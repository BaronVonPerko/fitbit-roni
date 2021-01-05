import document from "document";
import
{
	today,
	goals
} from "user-activity";
import * as util from "../../common/utils";

export default class Calories
{
	constructor()
	{
		this.txtCals = document.getElementById("cals");
		this.imgCals = document.getElementById("cals_img");
		this.gaugeCals = document.getElementById("cals_gauge");
		this.root = document.getElementById('root');
	}
	
	update()
	{
		const calories = today.local.calories.toString();
		const goalCompletionNormal = today.local.calories / goals.calories;
		const gaugeSweepAngle = util.mapNumber(goalCompletionNormal, 0, 1, 0, 360);
		const calsIconX = this.root.width - 40 - (18 * calories.length);
		this.txtCals.text = calories;
		this.imgCals.x = calsIconX;
		this.gaugeCals.x = calsIconX - (this.imgCals.width / 2) + 2;
		this.gaugeCals.sweepAngle = gaugeSweepAngle;
	}
	
	hide()
	{
		this.txtCals.style.opacity = 0;
		this.imgCals.style.opacity = 0;
		this.gaugeCals.style.opacity = 0;
	  }
	
	show()
	{
		this.txtCals.style.opacity = 1;
		this.imgCals.style.opacity = 1;
		this.gaugeCals.style.opacity = 1;
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
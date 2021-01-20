import document from 'document';
import HeartRate from './heartrate';
import Steps from './steps';
import Calories from './calories';
import FileStore from './fileStore';
import
{
	KEY_COLOR,
	KEY_UI_STATE,
	KEY_UI_STATE_CALS,
	KEY_UI_STATE_HEART,
	KEY_UI_STATE_STEPS
} from "./common/constants"

export default class UI
{
	static instance = new UI();
	
	constructor()
	{
		this.colorConfigurableElements = document.getElementsByClassName('colorConfigurable');
		
		this.steps = new Steps();
		this.heartrate = new HeartRate();
		this.calories = new Calories();
		
		document.getElementById('tapzone').onclick = this.onClick.bind(this);
	}
	
	updateColor(color)
	{
		this.colorConfigurableElements.forEach((element) =>
		{
			element.style.fill = color;
		});
	}
	
	restore()
	{
		const color = FileStore.instance.getValue(KEY_COLOR);
		this.updateColor(color);
		this.setState(FileStore.instance.getValue(KEY_UI_STATE), false);
	}
	
	onClick()
	{
		const currentState = FileStore.instance.getValue(KEY_UI_STATE);
		const availableStates = [KEY_UI_STATE_STEPS, KEY_UI_STATE_HEART, KEY_UI_STATE_CALS];
		let enabledStates = [];
		
		// create an array of states that the user has enabled
		availableStates.forEach(state =>
		{
			if (FileStore.instance.getValue(state))
			{
				enabledStates.push(state);
			}
		});
		
		// get the index of the next enabled state
		let nextStateIndex = 0;
		enabledStates.forEach((state, index) =>
		{
			if (state == currentState)
			{
				nextStateIndex = index + 1;
			}
		});
		if (nextStateIndex >= enabledStates.length)
		{
			nextStateIndex = 0;
		}
		
		this.setState(enabledStates[nextStateIndex], true, );
	}
	
	setState(newState, save)
	{
		switch (newState)
		{
			case KEY_UI_STATE_STEPS:
				this.steps.start();
				this.heartrate.stop();
				this.calories.stop();
				break;
			case KEY_UI_STATE_HEART:
				this.steps.stop();
				this.heartrate.start();
				this.calories.stop();
				break;
			case KEY_UI_STATE_CALS:
				this.steps.stop();
				this.heartrate.stop();
				this.calories.start();
		}
		if (newState === undefined)
		{
			this.steps.stop();
			this.heartrate.stop();
			this.calories.stop();
		}
		if (save)
		{
			FileStore.instance.setValue(KEY_UI_STATE, newState);
		}
	}
}

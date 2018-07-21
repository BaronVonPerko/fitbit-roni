import document from "document";
import { clearVersionNotes } from "./versionNotes";

export function touchListener(steps, heartrate, state) {
  
  document.getElementById('root').onclick = () => {
    switch(state) {
      case 'steps':
        steps.hide();
        heartrate.start();
        state = 'heart';
        break;
      case 'heart':
        steps.show();
        heartrate.stop();
        state = 'steps';
        break;
      case 'notes':
        state = 'steps';
        steps.show();
        heartrate.stop();
        clearVersionNotes();
        break;
    }  
  };
}
import FileStore from './fileStore';
import document from 'document';


export function hideVersionNotes() {
  document.getElementById('version_notes_overlay').style.visibility = 'hidden';
  document.getElementById('version_notes_text').style.visibility = 'hidden';
}

export function showVersionNotes() {
  document.getElementById('version_notes_overlay').style.visibility = 'visible';
  document.getElementById('version_notes_text').style.visibility = 'visible';
}

export function clearVersionNotes() {
  let fileStore = new FileStore();
  fileStore.storeVersionNotes('1.1.0');
  
  hideVersionNotes();
}
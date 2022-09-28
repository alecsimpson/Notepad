import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Note } from '../note.model';
import { NotesData, NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  noteForm: FormGroup;
  editMode: boolean;
  noteId?: number;
  selectedNote?: Note;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.editMode = false;
    this.notesService.notesSubject.subscribe((notesData: NotesData) => {
      if(notesData.index !== null) {
        this.editMode = true;
        this.selectedNote = notesData.notes[notesData.index]
        this.noteId = notesData.index;
        this.initForm(this.selectedNote);
      }
    })

    this.initForm()
  }

  private initForm(note?: Note) {
    if(note) {
      this.noteForm = new FormGroup({
        title: new FormControl(note.title, [Validators.required]),
        body: new FormControl(note.body, [Validators.required])
      })
    } else {
      this.noteForm = new FormGroup({
        title: new FormControl(null, [Validators.required]),
        body: new FormControl(null, [Validators.required])
      })
    }
  }

  public saveNote() {
    const note = new Note(this.noteForm.value.title, this.noteForm.value.body);
    if(this.editMode) {
      this.notesService.updateNote(note, this.noteId)
    } else {
      this.notesService.addNote(note)
    }

  }

  public resetForm() {
    this.noteForm.reset();
    this.editMode = false;
    this.notesService.selectNote(null)
  }

}

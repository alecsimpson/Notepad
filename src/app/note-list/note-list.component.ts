import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Note } from '../note.model';
import { NotesData, NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  notesSubscription: Subscription;
  notesArray!: Note[]


  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.notesArray = this.notesService.getNotes()
    this.notesSubscription = this.notesService.notesSubject.subscribe(
      (notesData: NotesData) => {
        this.notesArray = notesData.notes;
      })
  }

  ngOnDestroy(): void {
    this.notesSubscription.unsubscribe();
  }

  public selectNote(index: number) {
    this.notesService.selectNote(index)
  }


}

import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Note } from "../note.model";


export type NotesData = {
  index?: number,
  notes: Note[]
}

@Injectable({providedIn: 'root'})
export class NotesService {



  private notes: Note[] = [new Note('title1', 'body1'), new Note('title2', 'body2')]

  // notesSubject = new Subject<Note[]>();
  // selectedNoteSubject = new Subject<{note: Note, index: number}>();
  notesSubject = new Subject<NotesData>();

  public getNotes() {
    return this.notes.slice();
  }

  public addNote(note: Note) {
    this.notes.push(note);
    this.notesSubject.next(
      {
        notes: this.notes
      }
    );
  }

  public updateNote(note: Note, index: number) {
    this.notes[index] = note
    this.notesSubject.next(
      {
        notes: this.notes
      }
    );
  }

  public deleteNote(index: number) {
    this.notes = this.notes.splice(index, 1)
    this.notesSubject.next(
      {
        notes: this.notes
      }
    );
  }

  public selectNote(index: number) {
    const selectedNote = this.notes[index]
    this.notesSubject.next(
      {
        index: index,
        notes: this.notes
      }
    );
  }


}

import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/note.model';
import { NotesData, NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-note-tile',
  templateUrl: './note-tile.component.html',
  styleUrls: ['./note-tile.component.css']
})
export class NoteTileComponent implements OnInit {

  isSelected: boolean;

  @Input() index: number;
  @Input() note: Note;
  @Output() noteSelected = new EventEmitter<null>();

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.notesService.notesSubject.subscribe((notesData: NotesData) => {
      if(notesData.index !== null && notesData.index === this.index) {
        this.isSelected = true;
      } else {
        this.isSelected = false;
      }
    })
  }

  public selectNote() {
    this.noteSelected.emit()
  }




}

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteTileComponent } from './note-list/note-tile/note-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteDetailComponent,
    NoteListComponent,
    NoteTileComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

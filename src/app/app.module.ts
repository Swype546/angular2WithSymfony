import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent }   from './app.component';
import { NoteListComponent } from './notelist.component';
import { NoteEditorComponent } from './noteeditor.component';
import { NoteHandlerComponent } from './notehandler.component';
import { NewNoteComponent } from './newnote.component';
import { NewCategoryComponent } from './newcategory.component';
import { CategoryListComponent } from './categorylist.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, NoteListComponent, NoteEditorComponent, NoteHandlerComponent, NewNoteComponent, NewCategoryComponent, CategoryListComponent],
  bootstrap:    [ AppComponent]
})
export class AppModule { }

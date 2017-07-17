import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; // To use HTTP
import { FormsModule } from '@angular/forms'; //To use ngForm

import { AppComponent } from './app.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersFormsComponent } from './characters-forms/characters-forms.component';
import { ApiService } from './services/api.service'

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharactersFormsComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

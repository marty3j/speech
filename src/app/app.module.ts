import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { SpeechformComponent } from './speechform/speechform.component';
import { MustMatchDirective } from './_helper/must-match.directive';


@NgModule({
  declarations: [
    AppComponent,
    SpeechformComponent,
    MustMatchDirective
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

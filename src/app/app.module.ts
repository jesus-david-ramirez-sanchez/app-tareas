import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';

// firebase

import { AngularFireModule } from 'angularfire2';

// confing

import { environment } from '../environments/environment';
import { TodoComponent } from './components/todo/todo.component';

// services

import { TodoService } from './services/todo.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

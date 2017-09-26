import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InlineInputComponent } from './inline-input/inline-input.component';


import { AppComponent } from './app.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatDatepickerModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    InlineInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

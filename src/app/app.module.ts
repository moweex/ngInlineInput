import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineInputComponent } from './inline-input/inline-input.component';
import { AppComponent } from './app.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { MatCardModule,
         MatButtonModule,
         MatToolbarModule,
         MatIconModule,
         MatInputModule,
         MatDatepickerModule,
         MatSelectModule,
         MatAutocompleteModule,
         DateAdapter,
         NativeDateAdapter,
         MdNativeDateModule
} from '@angular/material';
import { TagInputModule } from 'ngx-chips';



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
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatAutocompleteModule,
    TagInputModule,
    MatDatepickerModule,
    MdNativeDateModule

  ],
  providers: [{ provide: DateAdapter, useClass: NativeDateAdapter }],
  bootstrap: [AppComponent]
})
export class AppModule { }

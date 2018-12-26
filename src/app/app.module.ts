import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

// Angular Material
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDividerModule,
  MatTooltipModule,
  MatStepperModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatDialogModule
} from '@angular/material';

// Components
import { ShortBioComponent } from './components/short-bio/short-bio.component';
import { MadeOfComponent } from './components/made-of/made-of.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShortBioComponent,
    MadeOfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

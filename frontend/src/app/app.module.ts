import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// UI libs
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { AppComponent } from './app.component';
import { NavComponent } from './components/navigator/nav.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatRadioModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [ RegisterComponent ]
})
export class AppModule { }

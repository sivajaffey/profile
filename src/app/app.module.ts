import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { TechUpdateComponent } from './tech-update/tech-update.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TechUpdateComponent,
    FourOFourComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

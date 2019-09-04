import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { TechUpdateComponent } from './tech-update/tech-update.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TechUpdateComponent,
    FourOFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

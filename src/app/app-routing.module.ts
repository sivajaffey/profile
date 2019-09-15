import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { TechUpdateComponent } from './tech-update/tech-update.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

const routes: Routes = [
{path: '', component: ProfileComponent },
{path: 'tech-update', component: TechUpdateComponent },
{path: 'hobbies', component: HobbiesComponent },
{path: '**', component: FourOFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

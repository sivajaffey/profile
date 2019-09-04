import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { TechUpdateComponent } from './tech-update/tech-update.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';

const routes: Routes = [
{path: '', component: ProfileComponent },
{path: 'tech-update', component: TechUpdateComponent },
{path: '**', component: FourOFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

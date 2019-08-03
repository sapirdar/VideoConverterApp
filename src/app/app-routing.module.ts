import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosComponent } from './videos/videos.component';


const routes: Routes = [

  { path: 'videos', component: VideosComponent },
  { path: '', pathMatch: 'full', redirectTo: 'videos' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

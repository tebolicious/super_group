import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import {AddUserComponent} from './user/add-user.component';
import {LoginComponent} from './user/login.component';
import {VideoComponent} from './video/video.component';
import {AddVideoComponent} from './video/add-video.component';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'videos', component: VideoComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'add_video', component: AddVideoComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

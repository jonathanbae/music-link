import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ViewSongComponent } from './view-song/view-song.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'view-song',
    component: ViewSongComponent
  },
  {
    path: 'authorize',
    component: AuthorizeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

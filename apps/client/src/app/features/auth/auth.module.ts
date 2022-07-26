import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent)
      }
    ])
  ]
})
export class AuthModule {
}

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadComponent: () => import('./pages/list/list.component').then(c => c.ListComponent)
      },
      {
        path: ':id',
        loadComponent: () => import('./pages/details/details.component').then(c => c.DetailsComponent)
      }
    ])
  ]
})
export class RegistersModule {
}

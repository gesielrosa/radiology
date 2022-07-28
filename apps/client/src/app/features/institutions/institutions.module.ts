import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadComponent: () => import('./pages/list/list.component').then((c) => c.ListComponent),
      },
      {
        path: ':id',
        loadComponent: () => import('./pages/form/form.component').then((c) => c.FormComponent),
      },
    ]),
  ],
})
export class InstitutionsModule {}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UnAuthGuard, AuthGuard} from '@lib/auth';
import {UserRoleGuard} from '@lib/users';

const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
    canActivate: [UnAuthGuard]
  },
  {
    path: 'criteria',
    loadChildren: () => import('./features/criteria/criteria.module').then(m => m.CriteriaModule),
    canActivate: [AuthGuard, UserRoleGuard],
    data: {
      roles: ['super_admin', 'admin']
    }
  },
  {
    path: 'image-types',
    loadChildren: () => import('./features/image-types/image-types.module').then(m => m.ImageTypesModule),
    canActivate: [AuthGuard, UserRoleGuard],
    data: {
      roles: ['super_admin', 'admin']
    }
  },
  {
    path: 'institutions',
    loadChildren: () => import('./features/institutions/institutions.module').then(m => m.InstitutionsModule),
    canActivate: [AuthGuard, UserRoleGuard],
    data: {
      roles: ['super_admin']
    }
  },
  {
    path: 'registers',
    loadChildren: () => import('./features/registers/registers.module').then(m => m.RegistersModule),
    canActivate: [AuthGuard, UserRoleGuard],
    data: {
      roles: ['super_admin', 'admin', 'responsible', 'user']
    }
  },
  {
    path: 'users',
    loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard, UserRoleGuard],
    data: {
      roles: ['super_admin', 'admin']
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

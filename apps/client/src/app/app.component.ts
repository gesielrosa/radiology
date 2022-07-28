import {Component} from '@angular/core';
import {NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public menuItems: NbMenuItem[] = [
    {
      title: 'Dashboard',
      link: '/',
      icon: 'home-outline',
    },
    {
      title: 'Registros',
      link: '/registers',
      icon: 'list-outline',
    },
    {
      title: 'Configuraçōes',
      children: [
        {
          title: 'Tipos de Imagens',
          link: '/image-types',
          icon: 'image-outline',
        },
        {
          title: 'Critérios',
          link: '/criteria',
          icon: 'grid-outline',
        },
        {
          title: 'Usuários',
          link: '/users',
          icon: 'person-outline',
        },
        {
          title: 'Instituições',
          link: '/institutions',
          icon: 'home-outline',
        },
      ],
    },
  ];

  public userMenuItems = [{title: 'Sair'}];
}

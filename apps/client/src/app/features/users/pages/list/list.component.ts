import {NgForOf} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NbButtonModule, NbCardModule, NbIconModule, NbListModule} from '@nebular/theme';

import {User} from '@lib/users';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [NbCardModule, NbListModule, RouterModule, NgForOf, NbButtonModule, NbIconModule],
  standalone: true,
})
export class ListComponent implements OnInit {
  public items: User[] = [
    {
      id: '1',
      institution_id: '1',
      name: 'Izabel Cristina',
      email: 'user1@gmail.com',
      role: 'user',
      created_at: new Date().toString(),
      deleted_at: new Date().toString(),
      updated_at: new Date().toString(),
    },
    {
      id: '2',
      institution_id: '1',
      name: 'Gesiel Rosa',
      email: 'user2@gmail.com',
      role: 'user',
      created_at: new Date().toString(),
      deleted_at: new Date().toString(),
      updated_at: new Date().toString(),
    },
    {
      id: '3',
      institution_id: '1',
      name: 'Usuário 3',
      email: 'user3@gmail.com',
      role: 'user',
      created_at: new Date().toString(),
      deleted_at: new Date().toString(),
      updated_at: new Date().toString(),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

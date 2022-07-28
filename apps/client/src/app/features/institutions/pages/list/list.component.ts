import {NgForOf} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NbButtonModule, NbCardModule, NbIconModule, NbListModule} from '@nebular/theme';

import {Institution} from '@lib/institutions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [NbCardModule, NbButtonModule, NbIconModule, RouterModule, NbListModule, NgForOf],
  standalone: true,
})
export class ListComponent implements OnInit {
  public items: Institution[] = [
    {
      id: '1',
      name: 'Clínica 1',
      created_at: new Date().toString(),
      deleted_at: new Date().toString(),
      updated_at: new Date().toString(),
    },
    {
      id: '2',
      name: 'Clínica 2',
      created_at: new Date().toString(),
      deleted_at: new Date().toString(),
      updated_at: new Date().toString(),
    },
    {
      id: '3',
      name: 'Clínica 3',
      created_at: new Date().toString(),
      deleted_at: new Date().toString(),
      updated_at: new Date().toString(),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

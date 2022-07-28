import {NgForOf} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NbButtonModule, NbCardModule, NbIconModule, NbListModule} from '@nebular/theme';

import {CriterionCategory} from '@lib/criteria';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [NbButtonModule, RouterModule, NbIconModule, NbListModule, NbCardModule, NgForOf],
  standalone: true,
})
export class ListComponent implements OnInit {
  public items: CriterionCategory[] = [
    {
      id: '1',
      name: 'Category 1',
      description: 'Description 1',
      created_at: new Date().toString(),
      deleted_at: new Date().toString(),
      updated_at: new Date().toString(),
    },
    {
      id: '2',
      name: 'Category 2',
      description: 'Description 2',
      created_at: new Date().toString(),
      deleted_at: new Date().toString(),
      updated_at: new Date().toString(),
    },
    {
      id: '2',
      name: 'Category 2',
      description: 'Description 2',
      created_at: new Date().toString(),
      deleted_at: new Date().toString(),
      updated_at: new Date().toString(),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

import {NgForOf} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NbButtonModule, NbCardModule, NbIconModule, NbListModule} from '@nebular/theme';

import {ImageType} from '@lib/image-types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [NbCardModule, NbListModule, NgForOf, RouterModule, NbButtonModule, NbIconModule],
  standalone: true,
})
export class ListComponent implements OnInit {
  public items: ImageType[] = [
    {
      id: '1',
      name: 'Imagem CC',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut dictum diam, eget ullamcorper ante.',
      created_at: new Date().toString(),
      deleted_at: new Date().toString(),
      updated_at: new Date().toString(),
    },
    {
      id: '2',
      name: 'Imagem MLO',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut dictum diam, eget ullamcorper ante.',
      created_at: new Date().toString(),
      deleted_at: new Date().toString(),
      updated_at: new Date().toString(),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

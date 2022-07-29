import {Component, OnInit} from '@angular/core';
import {Register} from '@lib/registers';
import {NbButtonModule, NbCardModule, NbIconModule, NbListModule} from '@nebular/theme';
import {RouterModule} from '@angular/router';
import {DatePipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [NbCardModule, NbButtonModule, NbIconModule, RouterModule, NbListModule, NgForOf, DatePipe],
})
export class ListComponent implements OnInit {
  public items: Register[] = [
    {
      id: '1',
      patient_id: '2345342',
      user_id: '1',
      user_responsible_id: '1',
      status: 'Pendente',
      responsible_note: '',
      created_at: new Date().toString(),
      deleted_at: new Date().toString(),
      updated_at: new Date().toString(),
    },
    {
      id: '2',
      patient_id: '9834698',
      user_id: '2',
      user_responsible_id: '2',
      status: 'Avaliado',
      responsible_note: '',
      created_at: new Date().toString(),
      deleted_at: new Date().toString(),
      updated_at: new Date().toString(),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

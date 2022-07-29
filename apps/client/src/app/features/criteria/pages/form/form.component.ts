import {NgForOf} from '@angular/common';
import {Component, OnInit, TemplateRef} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NbButtonModule, NbCardModule, NbDialogService, NbIconModule, NbInputModule, NbListModule} from '@nebular/theme';

import {Criterion} from '@lib/criteria';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [NbCardModule, NbInputModule, NbButtonModule, RouterModule, NbListModule, NbIconModule, NgForOf],
  standalone: true,
})
export class FormComponent implements OnInit {
  public criterionItems: Criterion[] = [
    {
      id: '1',
      category_id: '1',
      name: 'Identificação correta',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      weight: 1,
      created_at: new Date().toString(),
      deleted_at: new Date().toString(),
      updated_at: new Date().toString(),
    },
    {
      id: '2',
      category_id: '2',
      name: 'Incorreto, com sobreposição nas estruturas anatômicas',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      weight: 2,
      created_at: new Date().toString(),
      deleted_at: new Date().toString(),
      updated_at: new Date().toString(),
    },
    {
      id: '3',
      category_id: '3',
      name: 'Incorreto, falta dos dados do local do exame',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      weight: 3,
      created_at: new Date().toString(),
      deleted_at: new Date().toString(),
      updated_at: new Date().toString(),
    },
    {
      id: '4',
      category_id: '4',
      name: 'Incorreto, falta do nome da paciente ou data do exame',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      weight: 4,
      created_at: new Date().toString(),
      deleted_at: new Date().toString(),
      updated_at: new Date().toString(),
    },
  ];

  constructor(private dialogService: NbDialogService) {}

  ngOnInit(): void {}

  public openDialog(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }
}

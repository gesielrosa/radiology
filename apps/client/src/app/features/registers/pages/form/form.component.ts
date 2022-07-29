import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {
  NbAccordionModule,
  NbBadgeModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbListModule,
  NbRadioModule,
  NbTabsetModule,
} from '@nebular/theme';
import {ImageType} from '@lib/image-types';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbListModule,
    DatePipe,
    NgForOf,
    NbBadgeModule,
    NbAccordionModule,
    NgIf,
    NbRadioModule,
    NbTabsetModule,
  ],
  standalone: true,
})
export class FormComponent implements OnInit {
  public imageTypes: ImageType[] = [
    {
      id: '1',
      name: 'Imagem CC',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tortor sagittis, ultricies eros id, porta eros. Proin egestas, leo in condimentum vulputate, tortor enim finibus massa, a semper quam diam suscipit mauris.',
      created_at: new Date().toString(),
      deleted_at: new Date().toString(),
      updated_at: new Date().toString(),
    },
    {
      id: '1',
      name: 'Imagem MLO',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tortor sagittis, ultricies eros id, porta eros. Proin egestas, leo in condimentum vulputate, tortor enim finibus massa, a semper quam diam suscipit mauris.',
      created_at: new Date().toString(),
      deleted_at: new Date().toString(),
      updated_at: new Date().toString(),
    },
  ];

  public categories: any[] = [
    {
      id: '1',
      name: 'Identificação das imagens',
      description:
        'Cada uma das imagens que compõem o exame deve conter nome do serviço, data do exame, nome e sobrenome da paciente, data de nascimento, indicação da mama direita e esquerda, indicação da incidência, deve ser legível e que não se sobreponha às estruturas anatômicas.',
      criteria: [
        {
          id: '1',
          name: 'Identificação correta',
          weight: 1,
        },
        {
          id: '2',
          name: ' Incorreto, com sobreposição nas estruturas anatômicas',
          weight: 2,
        },
        {
          id: '3',
          name: 'Incorreto, falta dos dados do local do exame',
          weight: 3,
        },
        {
          id: '4',
          name: 'Incorreto, falta do nome da paciente ou data do exame',
          weight: 4,
        },
      ],
    },
    {
      id: '2',
      name: 'Papila perfilada',
      description:
        'A papila deve estar paralela ao filme em todas as incidências sem sobrepor a imagem, centrada e paralela ao filme.',
      criteria: [
        {
          id: '1',
          name: 'Correta',
          weight: 1,
        },
        {
          id: '2',
          name: 'Incorreta, mas visualizado claramente ou indicado por marcador',
          weight: 2,
        },
        {
          id: '3',
          name: 'Incorreta, não visualizado mas realizado incidência complementar',
          weight: 3,
        },
        {
          id: '4',
          name: 'Incorreta e sem realização de incidência complementar',
          weight: 4,
        },
      ],
    },
  ];

  public historic: {name: string; created_at: string}[] = [
    {
      name: 'Avaliado por Dr. João',
      created_at: new Date().toString(),
    },
    {
      name: 'Alteração',
      created_at: new Date().toString(),
    },
    {
      name: 'Criação',
      created_at: new Date().toString(),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

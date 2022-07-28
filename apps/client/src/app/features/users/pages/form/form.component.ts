import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NbButtonModule, NbCardModule, NbInputModule, NbSelectModule} from '@nebular/theme';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [NbCardModule, NbInputModule, NbButtonModule, RouterModule, NbSelectModule],
  standalone: true,
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

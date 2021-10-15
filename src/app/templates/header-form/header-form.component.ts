import { Component, Input, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormModel } from 'src/app/organisms/form/model/form.model';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.scss']
})
export class HeaderFormComponent {

  @Input() title = '';

  @Input() form: FormModel[] = [];

  constructor() { }

}

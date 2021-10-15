import { Component, Input, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { TypeFormControlEnum } from 'src/app/molecules/form-control/model/type-form-control.enum';
import { FormModel } from 'src/app/organisms/form/model/form.model';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  title = 'Area';

  form: FormModel[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = [
      {
        name: 'description',
        validators: [Validators.required],
        value: '',
        type: TypeFormControlEnum.INPUT,
        label: 'Descripcion'
      }
    ];
  }

}

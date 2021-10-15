import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { TypeFormControlEnum } from 'src/app/molecules/form-control/model/type-form-control.enum';
import { FormModel } from 'src/app/organisms/form/model/form.model';

@Component({
  selector: 'app-departament',
  templateUrl: './departament.component.html',
  styleUrls: ['./departament.component.scss']
})
export class DepartamentComponent implements OnInit {

  title = 'Departamento';

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

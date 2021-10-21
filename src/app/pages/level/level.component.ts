import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { LabelModel } from 'src/app/atoms/label/model/label.dto';
import { TypeFormControlEnum } from 'src/app/molecules/form-control/properties/type-form-control.enum';
import { FormModel } from 'src/app/organisms/form/model/form.model';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {

  title = new LabelModel('Nivel');

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
        label: new LabelModel('Descripcion')
      }
    ];
  }

}

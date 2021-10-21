import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LabelModel } from 'src/app/atoms/label/model/label.dto';
import { TypeFormControlEnum } from 'src/app/molecules/form-control/properties/type-form-control.enum';
import { FormModel } from './model/form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formModel: FormModel[] = [];

  @Input() title: LabelModel =  new LabelModel();

  @Input() set form(groups: FormModel[]) {
    this.formModel = groups;
    groups.forEach((group) => {
      this.addControls(group);
    });
  }

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
  }

  ngOnInit(): void {
  }

  getControl(name: string): FormControl{
    return this.formGroup.get(name) as FormControl;
  }

  addControls(model: FormModel): void {
    this.formGroup.addControl(model.name, new FormControl(model.value, model.validators));
  }

}

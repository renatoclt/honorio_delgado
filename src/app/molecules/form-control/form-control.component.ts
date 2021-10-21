import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { LabelModel } from 'src/app/atoms/label/model/label.dto';
import { SelectOptionsModel } from 'src/app/atoms/select/model/select-options.model';
import { TypeFormControlEnum } from './properties/type-form-control.enum';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  @Input() type: TypeFormControlEnum = TypeFormControlEnum.NONE;

  @Input() form = new FormGroup({});

  @Input() controlName = '';

  @Input() label: LabelModel = new LabelModel();

  @Input() options: SelectOptionsModel[] = [];

  constructor() {

  }

  ngOnInit(): void {
  }

  get control(): AbstractControl | null {
    return this.form.get(this.controlName);
  }

  public get typeFormControlEnum(): typeof TypeFormControlEnum {
    return TypeFormControlEnum;
  }

}

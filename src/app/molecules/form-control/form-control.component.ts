import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { SelectOptionsModel } from 'src/app/atoms/select/model/select-options.model';
import { TypeFormControlEnum } from './model/type-form-control.enum';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  @Input() type: TypeFormControlEnum = TypeFormControlEnum.NONE;

  @Input() form = new FormGroup({});

  @Input() controlName = '';

  @Input() label = '';

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

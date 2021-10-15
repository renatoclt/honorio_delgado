import { AbstractControlOptions, ValidatorFn } from "@angular/forms";
import { SelectOptionsModel } from "src/app/atoms/select/model/select-options.model";
import { TypeFormControlEnum } from "src/app/molecules/form-control/model/type-form-control.enum";

export class FormModel {
  validators: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null | undefined;
  name: string;
  label: string;
  value: string | number | boolean | null | undefined;
  type: TypeFormControlEnum;
  options?: SelectOptionsModel[] = [];
  constructor() {
    this.validators = [];
    this.name = '';
    this.type = TypeFormControlEnum.NONE;
    this.label = '';
    this.options = [];
  }

}

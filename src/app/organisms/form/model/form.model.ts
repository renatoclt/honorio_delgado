import { AbstractControlOptions, ValidatorFn } from "@angular/forms";
import { LabelModel } from "src/app/atoms/label/model/label.dto";
import { SelectOptionsModel } from "src/app/atoms/select/model/select-options.model";
import { TypeFormControlEnum } from "src/app/molecules/form-control/properties/type-form-control.enum";

export class FormModel {
  validators: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null | undefined;
  name: string;
  label: LabelModel;
  value: string | number | boolean | null | undefined;
  type: TypeFormControlEnum;
  options?: SelectOptionsModel[] = [];
  constructor() {
    this.validators = [];
    this.name = '';
    this.type = TypeFormControlEnum.NONE;
    this.label = new LabelModel();
    this.options = [];
  }

}

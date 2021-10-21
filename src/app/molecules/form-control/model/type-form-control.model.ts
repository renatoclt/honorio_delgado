import { TypeFormControlEnum } from '../properties/type-form-control.enum';

export class TypeFormControl{
  type: TypeFormControlEnum;
  constructor(){
    this.type = TypeFormControlEnum.NONE;
  }
}

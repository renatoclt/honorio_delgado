import { LabelTypeEnum } from "../properties/label-type.enum";

export class LabelModel {
  text: string;
  type: LabelTypeEnum;
  constructor(text?: string, type?: LabelTypeEnum){
    this.text = text ? text : '';
    this.type = type ? type : LabelTypeEnum.NONE;
  }
}

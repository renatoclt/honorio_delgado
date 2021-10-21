import { ImageLabelModel } from "src/app/molecules/image-label/model/image-label.dto";

export class HeaderModel{
  dataCompany: ImageLabelModel;
  dataUser: ImageLabelModel;

  constructor(dateCompany: ImageLabelModel, dateUser: ImageLabelModel){
    this.dataCompany = dateCompany;
    this.dataUser = dateUser;
  }
}

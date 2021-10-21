import { ImageModel } from "src/app/atoms/image/model/image.dto";
import { LabelModel } from "src/app/atoms/label/model/label.dto";

export class ImageLabelModel{
  image: ImageModel;
  label: LabelModel[];
  constructor(image?: ImageModel, label?: LabelModel[]){
    this.image = image ? image : new ImageModel();
    this.label = label ? label : [];
  }
}

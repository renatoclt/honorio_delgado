import { ImageModel } from "src/app/atoms/image/model/image.dto";

export class ImageLabelModel{
  image: ImageModel;
  text: string[];
  constructor(image?: ImageModel, text?: string[]){
    this.image = image ? image : new ImageModel();
    this.text = text ? text : [];
  }
}

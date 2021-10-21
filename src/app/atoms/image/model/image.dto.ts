import { ImageSrcEnum } from "../properties/image-src.enum";
import { ImageTypeEnum } from "../properties/image-type.enum";

export class ImageModel {
  src: ImageSrcEnum;

  height: number;

  width: number;

  type: ImageTypeEnum;

  constructor(
    src?: ImageSrcEnum,
    type?: ImageTypeEnum,
    height?: number,
    width?: number,
    ){
    this.src = src ? src : ImageSrcEnum.NONE;
    this.type = type ? type : ImageTypeEnum.NONE;
    this.height = height ? height : 0;
    this.width = width ? width : 0;
  }

}

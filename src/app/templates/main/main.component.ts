import { Component, OnInit } from '@angular/core';
import { ImageModel } from 'src/app/atoms/image/model/image.dto';
import { ImageSrcEnum } from 'src/app/atoms/image/properties/image-src.enum';
import { ImageTypeEnum } from 'src/app/atoms/image/properties/image-type.enum';
import { LabelModel } from 'src/app/atoms/label/model/label.dto';
import { LabelTypeEnum } from 'src/app/atoms/label/properties/label-type.enum';
import { ImageLabelModel } from 'src/app/molecules/image-label/model/image-label.dto';
import { HeaderModel } from 'src/app/organisms/header/model/header.dto';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  headerModel: HeaderModel;

  constructor() {
    this.headerModel = new HeaderModel(
      new ImageLabelModel(
        new ImageModel(
          ImageSrcEnum.LOGO, ImageTypeEnum.CIRCLE, 50, 50),
          [new LabelModel('Hospital Honorio Delgado', LabelTypeEnum.HIGHLIGHTED)]),
      new ImageLabelModel(
        new ImageModel(
          ImageSrcEnum.DEFAULT_PROFILE, ImageTypeEnum.CIRCLE, 50, 50),
          [new LabelModel('Alina Tejeda', LabelTypeEnum.HIGHLIGHTED), new LabelModel('Administrador', LabelTypeEnum.HIGHLIGHTED)]));
  }

  ngOnInit(): void {
  }

}

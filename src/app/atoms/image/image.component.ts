import { Component, Input, OnInit } from '@angular/core';
import { ImageModel } from './model/image.dto';
import { ImageSrcEnum } from './properties/image-src.enum';
import { ImageTypeEnum } from './properties/image-type.enum';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() image: ImageModel;

  constructor() {
    this.image = new ImageModel();
  }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ImageSrcEnum } from 'src/app/atoms/image/properties/image-src.enum';
import { ImageLabelModel } from './model/image-label.dto';

@Component({
  selector: 'app-image-label',
  templateUrl: './image-label.component.html',
  styleUrls: ['./image-label.component.scss']
})
export class ImageLabelComponent implements OnInit {

  @Input() imageLabel: ImageLabelModel;

  constructor() {
    this.imageLabel = new ImageLabelModel();
  }

  ngOnInit(): void {
  }

}

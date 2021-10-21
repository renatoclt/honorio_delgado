import { Component, Input, OnInit } from '@angular/core';
import { ImageModel } from 'src/app/atoms/image/model/image.dto';
import { ImageLabelModel } from 'src/app/molecules/image-label/model/image-label.dto';
import { HeaderModel } from './model/header.dto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headerModel: HeaderModel;

  constructor() {
    this.headerModel = new HeaderModel(new ImageLabelModel(new ImageModel(), []), new ImageLabelModel(new ImageModel(), []));
   }

  ngOnInit(): void {
  }

}

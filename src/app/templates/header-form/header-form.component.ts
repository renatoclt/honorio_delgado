import { Component, Input, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { ImageModel } from 'src/app/atoms/image/model/image.dto';
import { ImageSrcEnum } from 'src/app/atoms/image/properties/image-src.enum';
import { ImageTypeEnum } from 'src/app/atoms/image/properties/image-type.enum';
import { ImageLabelModel } from 'src/app/molecules/image-label/model/image-label.dto';
import { FormModel } from 'src/app/organisms/form/model/form.model';
import { HeaderModel } from 'src/app/organisms/header/model/header.dto';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.scss']
})
export class HeaderFormComponent {

  @Input() title = '';

  @Input() form: FormModel[] = [];

  constructor() {
  }

}

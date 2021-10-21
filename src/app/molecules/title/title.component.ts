import { Component, Input, OnInit } from '@angular/core';
import { LabelComponent } from 'src/app/atoms/label/label.component';
import { LabelModel } from 'src/app/atoms/label/model/label.dto';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Input() title: LabelModel;

  constructor() {
    this.title = new LabelModel();
  }

}

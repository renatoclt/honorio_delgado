import { Component, Input, OnInit } from '@angular/core';
import { LabelModel } from './model/label.dto';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {

  @Input() label: LabelModel;

  constructor() {
    this.label = new LabelModel();
  }

}

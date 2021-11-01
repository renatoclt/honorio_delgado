import { Component, Input, OnInit } from '@angular/core';
import { LabelModel } from 'src/app/atoms/label/model/label.dto';
import { TypeTableDateEnum } from './properties/type-table-date.enum';

@Component({
  selector: 'app-table-date',
  templateUrl: './table-date.component.html',
  styleUrls: ['./table-date.component.scss']
})
export class TableDateComponent implements OnInit {

  label: LabelModel =  new LabelModel();

  @Input() set content(value: string |  LabelModel) {
    if (typeof value  === 'string') {
      this.label.text = value;
    }
  }

  @Input() type!: TypeTableDateEnum;

  constructor() { }

  ngOnInit(): void {
  }

  public get typeTableDate(): typeof TypeTableDateEnum {
    return TypeTableDateEnum;
  }
}

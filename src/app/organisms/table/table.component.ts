import { Component, Input, OnInit } from '@angular/core';
import { TableHeaderModel } from './model/table-header.dto';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() items!: any[];
  @Input() tableHeader!: TableHeaderModel[];

  @Input() textAction = '';
  @Input() action = true;

  constructor() { }

  ngOnInit(): void {
  }

}

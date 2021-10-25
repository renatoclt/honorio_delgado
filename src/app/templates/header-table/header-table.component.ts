import { Component, Input, OnInit } from '@angular/core';
import { HeaderTableModel } from './model/header-table.dto';

@Component({
  selector: 'app-header-table',
  templateUrl: './header-table.component.html',
  styleUrls: ['./header-table.component.scss']
})
export class HeaderTableComponent implements OnInit {

  @Input() headerTable!: HeaderTableModel;

  constructor() { }

  ngOnInit(): void {
  }

}

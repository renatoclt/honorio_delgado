import { Component, Input, OnInit } from '@angular/core';
import { RecursiveMenuInterface } from './model/recursive-menu.dto';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Input() menu!: RecursiveMenuInterface;

  constructor() { }

  ngOnInit(): void {
  }

}

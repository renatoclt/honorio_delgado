import { Component, Input, OnInit } from '@angular/core';
import { RecursiveMenuInterface } from 'src/app/molecules/menu-list/model/recursive-menu.dto';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menus!: RecursiveMenuInterface[];

  constructor() { }

  ngOnInit(): void {
  }

}

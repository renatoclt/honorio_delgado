import { Component, Input, OnInit } from '@angular/core';
import { RecursiveMenuInterface } from 'src/app/molecules/menu-list/model/recursive-menu.dto';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() menu!: RecursiveMenuInterface;

  constructor() { }

  ngOnInit(): void {
  }

}

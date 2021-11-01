import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { empty } from 'rxjs';
import { TypeButtonEnum } from './properties/button-type.enum';
import { IconTypeEnum } from './properties/icon-type.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text = 'Aceptar';
  @Input() icon: IconTypeEnum = IconTypeEnum.none;
  @Input() type: TypeButtonEnum = TypeButtonEnum.NONE;

  // tslint:disable-next-line: no-output-native
  @Output() click = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  clickButton(): void{
    this.click.emit();
  }

}

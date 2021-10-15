import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-buttons',
  templateUrl: './form-buttons.component.html',
  styleUrls: ['./form-buttons.component.scss']
})
export class FormButtonsComponent implements OnInit {

  @Input() clean = true;
  @Input() save = true;
  @Input() saveText = 'Guardar';
  @Input() cleanText = 'Limpiar';

  constructor() { }

  ngOnInit(): void {
  }

}

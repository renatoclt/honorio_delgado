import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { SelectOptionsModel } from './model/select-options.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() form: FormGroup = new FormGroup({});

  @Input() controlName = '';

  @Input() options: SelectOptionsModel[];


  constructor() {
    this.options = [];
  }

  ngOnInit(): void {
  }

  get control(): AbstractControl | null {
    return this.form.get(this.controlName);
  }
}

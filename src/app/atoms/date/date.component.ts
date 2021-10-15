import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  @Input() form: FormGroup = new FormGroup({});

  @Input() controlName = '';


  constructor() {
  }

  ngOnInit(): void {
  }

  get control(): AbstractControl | null {
    return this.form.get(this.controlName);
  }

}

import { Component, Input } from '@angular/core';
import { LabelModel } from 'src/app/atoms/label/model/label.dto';
import { FormModel } from 'src/app/organisms/form/model/form.model';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.scss']
})
export class HeaderFormComponent {

  @Input() title: LabelModel;

  @Input() form: FormModel[] = [];

  constructor() {
    this.title = new LabelModel('');
  }

}

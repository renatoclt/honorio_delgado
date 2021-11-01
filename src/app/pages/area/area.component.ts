import { Component, Input, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { LabelModel } from 'src/app/atoms/label/model/label.dto';
import { TypeFormControlEnum } from 'src/app/molecules/form-control/properties/type-form-control.enum';
import { TypeTableDateEnum } from 'src/app/molecules/table-date/properties/type-table-date.enum';
import { FormModel } from 'src/app/organisms/form/model/form.model';
import { AreaService } from 'src/app/services/area.service';
import { HeaderTableModel } from 'src/app/templates/header-table/model/header-table.dto';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  title = new LabelModel('Area');

  form: FormModel[] = [];

  headerTable!: HeaderTableModel;

  constructor(private areaService: AreaService) {
  }

  ngOnInit(): void {
    this.buildForm();
    this.buildData();
  }

  buildForm(): void {
    this.form = [
      {
        name: 'description',
        validators: [Validators.required],
        value: '',
        type: TypeFormControlEnum.INPUT,
        label: new LabelModel('Descripción')
      }
    ];
  }

  buildData(): void {
    this.headerTable = {
      title: 'Area',
      tableData: this.areaService.getAllArea(),
      tableHeader: [
        {
          title: 'Código',
          name: 'code',
          type: TypeTableDateEnum.TEXT
        },
        {
          title: 'Nombre',
          name: 'name',
          type: TypeTableDateEnum.TEXT
        },
        {
          title: '',
          name: 'actions',
          type: TypeTableDateEnum.EDIT_DELETE
        },
      ]
    };
    console.log(this.headerTable);
  }

}

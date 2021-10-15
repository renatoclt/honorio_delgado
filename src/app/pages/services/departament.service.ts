import { Injectable } from '@angular/core';
import { SelectOptionsModel } from 'src/app/atoms/select/model/select-options.model';

@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  allDepartament: SelectOptionsModel[] = [
    {
      name: 'Lima',
      code: '001'
    },
    {
      name: 'Arequipa',
      code: '002'
    },
  ];
  constructor() { }

  getAllDepartament(): SelectOptionsModel[] {
    return this.allDepartament;
  }
}

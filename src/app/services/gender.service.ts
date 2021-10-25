import { Injectable } from '@angular/core';
import { SelectOptionsModel } from 'src/app/atoms/select/model/select-options.model';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  allGender: SelectOptionsModel[] = [
    {
      name: 'Masculino',
      code: '001'
    },
    {
      name: 'Femenino',
      code: '002'
    },
  ];
  constructor() { }

  getAllGender(): SelectOptionsModel[] {
    return this.allGender;
  }
}

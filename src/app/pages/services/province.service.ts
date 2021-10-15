import { Injectable } from '@angular/core';
import { SelectOptionsModel } from 'src/app/atoms/select/model/select-options.model';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  allProvince: SelectOptionsModel[] = [
    {
      name: 'Arequipa',
      code: '001'
    },
    {
      name: 'Caylloma',
      code: '002'
    },
  ];
  constructor() { }

  getAllProvince(): SelectOptionsModel[] {
    return this.allProvince;
  }
}

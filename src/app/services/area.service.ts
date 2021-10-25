import { Injectable } from '@angular/core';
import { SelectOptionsModel } from '../atoms/select/model/select-options.model';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  allBloodGroup: SelectOptionsModel[] = [
    {
      name: 'Area 1',
      code: '001'
    },
    {
      name: 'Area 2',
      code: '002'
    },
  ];
  constructor() { }

  getAllArea(): SelectOptionsModel[] {
    return this.allBloodGroup;
  }
}

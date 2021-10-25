import { Injectable } from '@angular/core';
import { SelectOptionsModel } from 'src/app/atoms/select/model/select-options.model';

@Injectable({
  providedIn: 'root'
})
export class BloodGroupService {
  allBloodGroup: SelectOptionsModel[] = [
    {
      name: 'O+',
      code: '001'
    },
    {
      name: 'O-',
      code: '002'
    },
  ];
  constructor() { }

  getAllBloodGroup(): SelectOptionsModel[] {
    return this.allBloodGroup;
  }
}

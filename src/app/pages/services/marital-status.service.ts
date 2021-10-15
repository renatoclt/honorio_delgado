import { Injectable } from '@angular/core';
import { SelectOptionsModel } from 'src/app/atoms/select/model/select-options.model';

@Injectable({
  providedIn: 'root'
})
export class MaritalStatusService {
  allMaritalStatus: SelectOptionsModel[] = [
    {
      name: 'Soltero',
      code: '001'
    },
    {
      name: 'Casado',
      code: '002'
    },
  ];
  constructor() { }

  getAllMaritalStatus(): SelectOptionsModel[] {
    return this.allMaritalStatus;
  }
}

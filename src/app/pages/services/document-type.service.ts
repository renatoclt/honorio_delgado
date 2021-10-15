import { Injectable } from '@angular/core';
import { SelectOptionsModel } from 'src/app/atoms/select/model/select-options.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {

  allDocumentType: SelectOptionsModel[] = [
    {
      name: 'Dni',
      code: '001'
    },
    {
      name: 'Pasaporte',
      code: '002'
    },
  ];
  constructor() { }

  getAllDocumentType(): SelectOptionsModel[] {
    return this.allDocumentType;
  }
}

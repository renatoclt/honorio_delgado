import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { TypeFormControlEnum } from 'src/app/molecules/form-control/model/type-form-control.enum';
import { FormModel } from 'src/app/organisms/form/model/form.model';
import { BloodGroupService } from '../services/blood-group.service';
import { DepartamentService } from '../services/departament.service';
import { DocumentTypeService } from '../services/document-type.service';
import { GenderService } from '../services/gender.service';
import { MaritalStatusService } from '../services/marital-status.service';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  title = 'Información Personal';

  form: FormModel[] = [];

  constructor(
    readonly documentTypeService: DocumentTypeService,
    readonly genderService: GenderService,
    readonly bloodGroupService: BloodGroupService,
    readonly maritalStatusService: MaritalStatusService,
    readonly departamentService: DepartamentService,
    readonly provinceService: ProvinceService,
    ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = [
      {
        name: 'code',
        validators: [Validators.required],
        value: '',
        type: TypeFormControlEnum.INPUT,
        label: 'Código persona'
      },
      {
        name: 'lastNameFather',
        validators: [Validators.required],
        value: '',
        type: TypeFormControlEnum.INPUT,
        label: 'Apellido Paterno'
      },
      {
        name: 'lastNameMother',
        validators: [Validators.required],
        value: '',
        type: TypeFormControlEnum.INPUT,
        label: 'Apellido Materno'
      },
      {
        name: 'name',
        validators: [Validators.required],
        value: '',
        type: TypeFormControlEnum.INPUT,
        label: 'Nombres'
      },
      {
        name: 'documentType',
        validators: [Validators.required],
        value: '',
        type: TypeFormControlEnum.SELECT,
        label: 'Tipo de documento',
        options: this.documentTypeService.getAllDocumentType()
      },
      {
        name: 'documentNumber',
        validators: [Validators.required],
        value: '',
        type: TypeFormControlEnum.INPUT,
        label: 'Nro de documento'
      },
      {
        name: 'dateOfBirth',
        validators: [Validators.required],
        value: '',
        type: TypeFormControlEnum.DATE,
        label: 'Fecha de nacimiento'
      },
      {
        name: 'Gender',
        validators: [Validators.required],
        value: '',
        type: TypeFormControlEnum.SELECT,
        label: 'Sexo',
        options: this.genderService.getAllGender()
      },
      {
        name: 'bloodGroup',
        validators: [Validators.required],
        value: '',
        type: TypeFormControlEnum.SELECT,
        label: 'Grupo Sanguíneo',
        options: this.bloodGroupService.getAllBloodGroup()
      },
      {
        name: 'maritalStatus',
        validators: [Validators.required],
        value: '',
        type: TypeFormControlEnum.SELECT,
        label: 'Estado Civil',
        options: this.maritalStatusService.getAllMaritalStatus()
      },
      {
        name: 'departament',
        validators: [Validators.required],
        value: '',
        type: TypeFormControlEnum.SELECT,
        label: 'Departamento',
        options: this.departamentService.getAllDepartament()
      },
      {
        name: 'province',
        validators: [Validators.required],
        value: '',
        type: TypeFormControlEnum.SELECT,
        label: 'Provincia',
        options: this.provinceService.getAllProvince()
      },
      {
        name: 'direction',
        validators: [Validators.required],
        value: '',
        type: TypeFormControlEnum.INPUT,
        label: 'Dirección',
      },
      {
        name: 'mail',
        validators: [Validators.required],
        value: '',
        type: TypeFormControlEnum.INPUT,
        label: 'e-mail'
      },
      {
        name: 'mobile',
        validators: [Validators.required],
        value: '',
        type: TypeFormControlEnum.INPUT,
        label: 'Celular'
      },
      {
        name: 'telephone',
        validators: [Validators.required],
        value: '',
        type: TypeFormControlEnum.INPUT,
        label: 'Teléfono'
      },
      {
        name: 'active',
        validators: [Validators.required],
        value: '',
        type: TypeFormControlEnum.CHECK,
        label: 'Activo'
      },


    ];
  }

}

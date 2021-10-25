import { Component, OnInit } from '@angular/core';
import { ImageModel } from 'src/app/atoms/image/model/image.dto';
import { ImageSrcEnum } from 'src/app/atoms/image/properties/image-src.enum';
import { ImageTypeEnum } from 'src/app/atoms/image/properties/image-type.enum';
import { LabelModel } from 'src/app/atoms/label/model/label.dto';
import { LabelTypeEnum } from 'src/app/atoms/label/properties/label-type.enum';
import { ImageLabelModel } from 'src/app/molecules/image-label/model/image-label.dto';
import { RecursiveMenuInterface } from 'src/app/molecules/menu-list/model/recursive-menu.dto';
import { HeaderModel } from 'src/app/organisms/header/model/header.dto';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  headerModel!: HeaderModel;
  menuModel!: RecursiveMenuInterface[];

  constructor() {
  }

  ngOnInit(): void {
    this.buildDataHeader();
    this.buildDataMenus();
  }

  buildDataHeader(): void {
    this.headerModel = new HeaderModel(
      new ImageLabelModel(
        new ImageModel(
          ImageSrcEnum.LOGO, ImageTypeEnum.CIRCLE, 50, 50),
        [new LabelModel('Hospital Honorio Delgado', LabelTypeEnum.HIGHLIGHTED)]),
      new ImageLabelModel(
        new ImageModel(
          ImageSrcEnum.DEFAULT_PROFILE, ImageTypeEnum.CIRCLE, 50, 50),
        [new LabelModel('Alina Tejeda', LabelTypeEnum.HIGHLIGHTED), new LabelModel('Administrador', LabelTypeEnum.HIGHLIGHTED)]));
  }

  buildDataMenus(): void {
    this.menuModel = [
      {
        title: 'Inicio',
        url: '/inicio',
        class: ''
      },
      {
        title: 'Maestros',
        url: '/maestros',
        class: '',
        menu: [
          {
            title: 'Área',
            url: '/maestros/area',
            class: '',
          },
          {
            title: 'Grupo Sanguineo',
            url: '/maestros/grupo-sanguineo',
            class: '',
          },
          {
            title: 'Tipo de documento',
            url: '/maestros/tipo-de-documento',
            class: '',
          },
          {
            title: 'Género',
            url: '/maestros/genero',
            class: '',
          },
          {
            title: 'Estado Civil',
            url: '/maestros/estado-civil',
            class: '',
          },
          {
            title: 'Departamento',
            url: '/maestros/departamento',
            class: '',
          },
          {
            title: 'Información Personal',
            url: '/maestros/informacion-personal',
            class: '',
          },
          {
            title: 'Posición',
            url: '/maestros/posicion',
            class: '',
          },
          {
            title: 'Servicios',
            url: '/maestros/servicios',
            class: '',
          },
        ]
      },
      {
        title: 'Asistencia',
        url: '/asistencia',
        class: ''
      },
      {
        title: 'Reportes',
        url: '/reportes',
        class: ''
      },
    ];
  }

}

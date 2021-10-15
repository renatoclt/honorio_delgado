import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganismsModule } from '../organisms/organisms.module';
import { TemplatesModule } from '../templates/templates.module';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { DepartamentComponent } from './departament/departament.component';
import { AreaComponent } from './area/area.component';
import { PositionComponent } from './position/position.component';
import { LevelComponent } from './level/level.component';



@NgModule({
  declarations: [PersonalInformationComponent, DepartamentComponent, AreaComponent, PositionComponent, LevelComponent],
  imports: [
    CommonModule,
    TemplatesModule
  ]
})
export class PagesModule { }

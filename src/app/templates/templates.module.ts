import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganismsModule } from '../organisms/organisms.module';
import { HeaderFormComponent } from './header-form/header-form.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [HeaderFormComponent, MainComponent],
  imports: [
    CommonModule,
    OrganismsModule
  ],
  exports: [HeaderFormComponent, MainComponent]
})
export class TemplatesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganismsModule } from '../organisms/organisms.module';
import { HeaderFormComponent } from './header-form/header-form.component';



@NgModule({
  declarations: [HeaderFormComponent],
  imports: [
    CommonModule,
    OrganismsModule
  ],
  exports: [HeaderFormComponent]
})
export class TemplatesModule { }

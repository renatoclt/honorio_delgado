import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganismsModule } from '../organisms/organisms.module';
import { HeaderFormComponent } from './header-form/header-form.component';
import { MainComponent } from './main/main.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderTableComponent } from './header-table/header-table.component';



@NgModule({
  declarations: [
    HeaderFormComponent,
    MainComponent,
    HeaderTableComponent],
  imports: [
    CommonModule,
    OrganismsModule,
    FlexLayoutModule
  ],
  exports: [
    HeaderFormComponent,
    MainComponent,
    HeaderTableComponent]
})
export class TemplatesModule { }

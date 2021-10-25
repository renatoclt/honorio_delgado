import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculesModule } from '../molecules/molecules.module';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuComponent } from './menu/menu.component';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    FormComponent,
    HeaderComponent,
    MenuComponent,
    TableComponent],
  imports: [
    CommonModule,
    MoleculesModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    TableModule
  ], exports: [
    FormComponent,
    HeaderComponent,
    MenuComponent,
    TableComponent]
})
export class OrganismsModule { }

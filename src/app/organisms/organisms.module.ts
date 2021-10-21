import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculesModule } from '../molecules/molecules.module';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [FormComponent, HeaderComponent],
  imports: [
    CommonModule,
    MoleculesModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ], exports: [FormComponent, HeaderComponent]
})
export class OrganismsModule { }

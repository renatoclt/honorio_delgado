import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './form-control/form-control.component';
import { TitleComponent } from './title/title.component';
import { FormButtonsComponent } from './form-buttons/form-buttons.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [FormControlComponent, TitleComponent, FormButtonsComponent],
  imports: [
    CommonModule,
    AtomsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [FormControlComponent, TitleComponent, FormButtonsComponent]
})
export class MoleculesModule { }

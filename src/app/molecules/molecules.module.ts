import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './form-control/form-control.component';
import { TitleComponent } from './title/title.component';
import { FormButtonsComponent } from './form-buttons/form-buttons.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImageLabelComponent } from './image-label/image-label.component';



@NgModule({
  declarations: [FormControlComponent, TitleComponent, FormButtonsComponent, ImageLabelComponent],
  imports: [
    CommonModule,
    AtomsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [FormControlComponent, TitleComponent, FormButtonsComponent, ImageLabelComponent]
})
export class MoleculesModule { }

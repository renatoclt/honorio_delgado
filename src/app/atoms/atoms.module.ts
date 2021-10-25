import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { LabelComponent } from './label/label.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { DateComponent } from './date/date.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import { IconsComponent } from './icons/icons.component';
import { ImageComponent } from './image/image.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ButtonComponent,
    LabelComponent,
    InputComponent,
    SelectComponent,
    DateComponent,
    CheckboxComponent,
    IconsComponent,
    ImageComponent,
    MenuItemComponent,
    ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextModule,
    RouterModule
  ],
  exports: [
    ButtonComponent,
    LabelComponent,
    InputComponent,
    SelectComponent,
    DateComponent,
    CheckboxComponent,
    IconsComponent,
    ImageComponent,
    MenuItemComponent
  ]
})
export class AtomsModule { }

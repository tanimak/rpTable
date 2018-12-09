import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBodyComponent } from './form-body/form-body.component';
import { MaterialImports } from '../../material.imports';
import { ReactiveFormBodyComponent } from './reactive-form-body/reactive-form-body.component';
import { RpFormElementComponent } from './rp-form-element/rp-form-element.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialImports,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FormBodyComponent, ReactiveFormBodyComponent, RpFormElementComponent],
  exports: [FormBodyComponent,ReactiveFormBodyComponent]
})
export class RpFormModule { }

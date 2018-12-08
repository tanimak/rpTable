import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBodyComponent } from './form-body/form-body.component';
import { MaterialImports } from '../../material.imports';
import { ReactiveFormBodyComponent } from './reactive-form-body/reactive-form-body.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialImports,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FormBodyComponent, ReactiveFormBodyComponent],
  exports: [FormBodyComponent,ReactiveFormBodyComponent]
})
export class RpFormModule { }

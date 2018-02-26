import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBodyComponent } from './form-body/form-body.component';
import { MaterialImports } from '../../material.imports';

@NgModule({
  imports: [
    CommonModule,
    MaterialImports,
    FormsModule
  ],
  declarations: [FormBodyComponent],
  exports: [FormBodyComponent]
})
export class RpFormModule { }

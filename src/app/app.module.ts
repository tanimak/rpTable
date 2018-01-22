import { InlineEditComponent } from './modules/rp-table/cell-types/inline-edit/inline-edit.component';
import { RpTableModule } from './modules/rp-table/rp-table.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialImports } from './material.imports';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SatPopoverModule } from '@ncstate/sat-popover';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RpTableModule,
    MaterialImports, 
    BrowserAnimationsModule,
    FormsModule,  
    ReactiveFormsModule, 
    SatPopoverModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

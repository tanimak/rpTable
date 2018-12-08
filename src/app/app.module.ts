import { RpFormModule } from './modules/rp-form/rp-form.module';
import { RpTableModule } from './modules/rp-table/rp-table.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialImports } from './material.imports';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SatPopoverModule } from '@ncstate/sat-popover';
import {HttpClientModule} from '@angular/common/http';
import { TestServiceService } from './test-service.service';

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
    RpFormModule
  ],
  providers: [TestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

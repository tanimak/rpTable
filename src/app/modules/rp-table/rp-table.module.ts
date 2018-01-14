import { SatPopoverModule } from "@ncstate/sat-popover";
import { MaterialImports } from "./../../material.imports";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RpTableComponent } from "./rp-table.component";
import { TableTitleComponent } from "./table-title/table-title.component";
import { TableBodyComponent } from "./table-body/table-body.component";
import { TableFooterComponent } from "./table-footer/table-footer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InlineEditComponent } from "./cell-types/inline-edit/inline-edit.component";
import { SelectComponent } from "./cell-types/select/select.component";
import { RpCellBackgroundComponent } from './cell-types/rp-cell-background/rp-cell-background.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialImports,
    FormsModule,
    ReactiveFormsModule,
    SatPopoverModule
  ],
  declarations: [
    RpTableComponent,
    TableTitleComponent,
    TableBodyComponent,
    TableFooterComponent,
    InlineEditComponent,
    SelectComponent
  ],
  exports: [RpTableComponent]
})
export class RpTableModule {}

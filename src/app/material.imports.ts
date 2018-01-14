import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule, MatTableModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule,MatIconModule, MatTableModule, MatFormFieldModule, MatSelectModule ,MatInputModule,MatPaginatorModule, MatSortModule ],
    exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule ,MatIconModule, MatTableModule, MatFormFieldModule, MatSelectModule, MatInputModule,MatPaginatorModule ,MatSortModule],
})
export class MaterialImports { }
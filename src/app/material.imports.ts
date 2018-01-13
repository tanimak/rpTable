import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule, MatTableModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatPaginatorModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule,MatIconModule, MatTableModule, MatFormFieldModule, MatSelectModule ,MatInputModule,MatPaginatorModule ],
    exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule ,MatIconModule, MatTableModule, MatFormFieldModule, MatSelectModule, MatInputModule,MatPaginatorModule ],
})
export class MaterialImports { }
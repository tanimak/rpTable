import { RpCellDef } from './rp-cell-def';
export class RpColumnDef<T> {
         public columnDef: string;
         public propertyName: string;
         public dataType: string;
         public width: number;
         public cellDefinition: RpCellDef;

         public constructor(columnDef: string, propertyName: string, dataType: string, width: number, cellDefinition: RpCellDef) {
           this.columnDef = columnDef;
           this.propertyName = propertyName;
           this.dataType = dataType;
           this.width = width;
           this.cellDefinition = cellDefinition;
         }

         public getColumnHeader(showColumn: boolean) {
           if (showColumn) {
             return this.columnDef;
           } else {
             return "";
           }
         }

         public cell(row: T) {
           return row[this.propertyName];
         }

         public getPropertyName() {
           return this.propertyName;
         }

         public getWidth() {
           return { flex: `0 0 ${this.width}%` };
         }

         public getCellDef() {
           return this.cellDefinition;
         }
         
       }

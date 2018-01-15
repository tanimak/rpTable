import { CdkScrollable } from '@angular/cdk/scrolling';
import { element } from "protractor";
import { RpTableModule } from "./../rp-table.module";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { MatTableDataSource,MatPaginator, MatSort } from "@angular/material";
import { MaterialImports } from "./../../../material.imports";
import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { DataSource } from "@angular/cdk/collections";
import { Observable } from "rxjs/Observable";
import { collectExternalReferences } from "@angular/compiler/src/output/output_ast";
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: "app-table-body",
  templateUrl: "./table-body.component.html",
  styleUrls: ["./table-body.component.css"]
})
export class TableBodyComponent implements OnInit {

  
  ELEMENT_DATA: Element[] = [
    { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
    { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
    { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
    { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
    { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
    { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
    { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
    { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
    { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
    { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
    { position: 11, name: "Sodium", weight: 22.9897, symbol: "Na" },
    { position: 12, name: "Magnesium", weight: 24.305, symbol: "Mg" },
    { position: 13, name: "Aluminum", weight: 26.9815, symbol: "Al" },
    { position: 14, name: "Silicon", weight: 28.0855, symbol: "Si" },
    { position: 15, name: "Phosphorus", weight: 30.9738, symbol: "P" },
    { position: 16, name: "Sulfur", weight: 32.065, symbol: "S" },
    { position: 17, name: "Chlorine", weight: 35.453, symbol: "Cl" },
    { position: 18, name: "Argon", weight: 39.948, symbol: "Ar" },
    { position: 19, name: "Potassium", weight: 39.0983, symbol: "K" },
    { position: 20, name: "Calcium", weight: 40.078, symbol: "Ca" }
  ];

  columns: RpColumnDef<Element>[] = [];
  paginatorSizes : number[] = [5, 10, 25, 100,150];
  selection = new SelectionModel<Element>(true, []);

  enablePaginator : boolean = true;
  disableSort: boolean = true;
  public dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  // public keyEvent(
  //   keyCode: KeyboardEvent,
  //   cellX: number,
  //   CellY: number,
  //   dataElement: String
  // ) {
  //   console.log(keyCode);
  //   console.log(this.dataSource.data[0]);
  //   console.log(cellX, CellY);
  //   console.log(dataElement);
  //   this.ELEMENT_DATA.indexOf;
  // }

  update(el: Element, column: string, newValue: any) {
    if (newValue == null) {
      return;
    }
    // copy and mutate
    const copy = this.dataSource.data.slice();
    console.log(newValue);
    el[column] = newValue;
  }

  onResize(re : any, propName : string){
    console.log(re.target.innerWidth);
    console.log(propName);
  }

  // columns = [
  //   {
  //     columnDef: "Position",
  //     propertyName: "position",
  //     cell: (row: Element) => `${row.position}`,
  //     element: (row: Element) => `${row}`
  //   },
  //   {
  //     columnDef: "Name",
  //     propertyName: "name",
  //     cell: (row: Element) => `${row.name}`,
  //     element: (row: Element) => `${row}`
  //   },
  //   {
  //     columnDef: "Weight",
  //     propertyName: "weight",
  //     cell: (row: Element) => `${row.weight}`,
  //     element: (row: Element) => `${row}`
  //   },
  //   {
  //     columnDef: "Symbol",
  //     propertyName: "symbol",
  //     cell: (row: Element) => `${row.symbol}`,
  //     element: (row: Element) => `${row}`
  //   }
  // ];

  /** Column definitions in order */
  displayedColumns: string[] = [];
  ngOnInit() {

    this.columns.push(new RpColumnDef<Element>("Position", "position","number",60));
    this.columns.push(new RpColumnDef<Element>("Name", "name","string",100));
    this.columns.push(new RpColumnDef<Element>("Weight", "weight","number",100));
    this.columns.push(new RpColumnDef<Element>("Symbol", "symbol","string",60));

    this.displayedColumns.push("select");
    this.columns.forEach(element => {
      this.displayedColumns.push(element.getPropertyName()); 
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(row => this.selection.select(row));
    }
  
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



export class RpColumnDef<T> {

  public columnDef: string;
  public propertyName: string;
  public dataType: string;
  public width: number;

  public constructor(columnDef: string, propertyName: string, dataType :string, width :number) {
    this.columnDef = columnDef;
    this.propertyName = propertyName;
    this.dataType = dataType;
  }

  public cell(row: T) {
    return row[this.propertyName];
  }

  public getPropertyName(){
    return this.propertyName;
  }


}

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  private dataSubject = new BehaviorSubject<Element[]>([]);

  data() {
    return this.dataSubject.value;
  }

  update(data) {
    this.dataSubject.next(data);
  }

  constructor(data: any[]) {
    super();
    this.dataSubject.next(data);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return this.dataSubject;
  }

  disconnect() {}
}

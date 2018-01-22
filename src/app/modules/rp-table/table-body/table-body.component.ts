import { RPRowElement } from "./../rp-row-element";
import { RpColumnDef } from "./../rp-column-def";
import { CdkScrollable } from "@angular/cdk/scrolling";
import { RpTableModule } from "./../rp-table.module";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { MaterialImports } from "./../../../material.imports";
import { Component, OnInit, ViewChild, Input, style } from "@angular/core";
import { DataSource } from "@angular/cdk/collections";
import { Observable } from "rxjs/Observable";
import { collectExternalReferences } from "@angular/compiler/src/output/output_ast";
import { SelectionModel } from "@angular/cdk/collections";

@Component({
  selector: "app-table-body",
  templateUrl: "./table-body.component.html",
  styleUrls: ["./table-body.component.css"]
})
export class TableBodyComponent implements OnInit {
  @Input("data") ELEMENT_DATA: RPRowElement[];

  columns: RpColumnDef<RPRowElement>[] = [];
  paginatorSizes: number[] = [5, 10, 25, 100, 150];
  enablePaginator: boolean = true;
  disableSort: boolean = false;
  enableSelect: boolean = false;

  public dataSource;
  selection = new SelectionModel<RPRowElement>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /** Column definitions in order */
  displayedColumns: string[] = [];
  ngOnInit() {
    this.dataSource = new MatTableDataSource<RPRowElement>(this.ELEMENT_DATA);

    //console.log(this.dataSource);

    this.columns.push(
      new RpColumnDef<RPRowElement>("Position", "position", "number", 25)
    );
    this.columns.push(
      new RpColumnDef<RPRowElement>("Name", "name", "string", 25)
    );
    this.columns.push(
      new RpColumnDef<RPRowElement>("Weight", "weight", "number", 20)
    );
    this.columns.push(
      new RpColumnDef<RPRowElement>("Symbol", "symbol", "string", 20)
    );

    this.displayedColumns.push("select");
    this.columns.forEach(element => {
      this.displayedColumns.push(element.getPropertyName());
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  update(el: Element, column: string, newValue: any) {
    if (newValue == null) {
      return;
    }
    // copy and mutate
    const copy = this.dataSource.data.slice();
    el[column] = newValue;
  }

  onResize(re: any, propName: string) {}

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
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }
}

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  private dataSubject = new BehaviorSubject<RPRowElement[]>([]);

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
  connect(): Observable<RPRowElement[]> {
    return this.dataSubject;
  }

  disconnect() {}
}

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

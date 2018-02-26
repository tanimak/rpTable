import { RpColumnDef } from "./modules/rp-table/rp-column-def";
import { RPRowElement } from "./modules/rp-table/rp-row-element";
import { PeriodicElements } from "./periodic-elements";
import { Component, OnInit } from "@angular/core";
import { RpTableConfigs } from "./modules/rp-table/rp-table-configs";
import { RpCellDef } from "./modules/rp-table/rp-cell-def";
import { CellType } from "./modules/rp-table/cell-type.enum";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  ELEMENT_DATA: PeriodicElements[] = [
    { status :0,position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
    { status :0,position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
    {status : 0,position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
    { status :0,position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
    // { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
    // { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
    // { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
    // { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
    // { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
    // { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
    // { position: 11, name: "Sodium", weight: 22.9897, symbol: "Na" },
    // { position: 12, name: "Magnesium", weight: 24.305, symbol: "Mg" },
    // { position: 13, name: "Aluminum", weight: 26.9815, symbol: "Al" },
    // { position: 14, name: "Silicon", weight: 28.0855, symbol: "Si" },
    // { position: 15, name: "Phosphorus", weight: 30.9738, symbol: "P" },
    // { position: 16, name: "Sulfur", weight: 32.065, symbol: "S" },
    // { position: 17, name: "Chlorine", weight: 35.453, symbol: "Cl" },
    // { position: 18, name: "Argon", weight: 39.948, symbol: "Ar" },
    // { position: 19, name: "Potassium", weight: 39.0983, symbol: "K" },
    // { position: 20, name: "Calcium", weight: 40.078, symbol: "Ca" }
  ];

  states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ];

  questions = [
    "Valid",
    "Invalid",
    "Legendary",
    "Are You Ok? There has been severl cases where we cannot keep the touch of your confidence. We are extremely sorry. Thanks."
  ];
  columns: RpColumnDef<RPRowElement>[] = [];

  tableConfigs: RpTableConfigs;

  ngOnInit() {
    this.columns.push(
      new RpColumnDef<RPRowElement>("Position", "position", "number", 25, new RpCellDef(CellType.InlineEdit,[]))
    );
    this.columns.push(
      new RpColumnDef<RPRowElement>("Name", "name", "string", 25, new RpCellDef(CellType.Select,this.states))
    );
    this.columns.push(
      new RpColumnDef<RPRowElement>("Weight", "weight", "number", 20,new RpCellDef(CellType.InlineEdit,[]))
    );
    this.columns.push(
      new RpColumnDef<RPRowElement>("Symbol", "symbol", "string", 20,new RpCellDef(CellType.None,[]))
    );
    this.tableConfigs = new RpTableConfigs(
      true,
      true,
      false,
      false,
      true,
      false,
      [5, 10, 15, 20],
      true
    );
  }
}

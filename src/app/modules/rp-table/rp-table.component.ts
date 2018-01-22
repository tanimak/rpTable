import { RPRowElement } from "./rp-row-element";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-rp-table",
  templateUrl: "./rp-table.component.html",
  styleUrls: ["./rp-table.component.css"]
})
export class RpTableComponent implements OnInit {
  @Input("data") tableData: RPRowElement[];
  constructor() {}

  ngOnInit() {}
}

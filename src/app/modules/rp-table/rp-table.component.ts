import { RpColumnDef } from './rp-column-def';
import { RPRowElement } from "./rp-row-element";
import { Component, OnInit, Input } from "@angular/core";
import { RpTableConfigs } from './rp-table-configs';

@Component({
  selector: "app-rp-table",
  templateUrl: "./rp-table.component.html",
  styleUrls: ["./rp-table.component.css"]
})
export class RpTableComponent implements OnInit {
  @Input("data") tableData: RPRowElement[];
  @Input("columns") columns: RpColumnDef<RPRowElement>[];
  @Input("configs") tableConfigs: RpTableConfigs;
  constructor() {}

  ngOnInit() {}
}

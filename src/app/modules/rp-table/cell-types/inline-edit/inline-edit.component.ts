import { RpCell } from './../rp-cell';
import { Component, OnInit, Input, Optional, Host } from "@angular/core";
import { SatPopover } from "@ncstate/sat-popover";
import "rxjs/add/operator/filter";
import { MaterialImports } from "./../../../../material.imports";

@Component({
  selector: "app-inline-edit",
  templateUrl: "./inline-edit.component.html",
  styleUrls: ["./inline-edit.component.scss"]
})
export class InlineEditComponent extends RpCell implements OnInit {
 
}

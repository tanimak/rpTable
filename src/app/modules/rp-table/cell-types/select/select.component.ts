import { RpCell } from './../rp-cell';
import { SatPopover } from "@ncstate/sat-popover";
import { Component, OnInit, Optional, Host, Input } from "@angular/core";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss","./../rp-cell.component.scss"]
})
export class SelectComponent extends RpCell implements OnInit {
 
  @Input("selections")  selections : string[];
  
}

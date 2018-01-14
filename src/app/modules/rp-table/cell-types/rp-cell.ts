import { OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { SatPopover } from "@ncstate/sat-popover";
import { Optional, Host } from "@angular/core";

export class RpCell implements OnInit {
  /** Overrides the cellValue and provides a reset value when changes are cancelled. */
  @Input()
  get value(): any {
    return this._value;
  }
  set value(x: any) {
    this.cellValue = this._value = x;
  }
  private _value : any = "";

  /** Form model for the input. */
  cellValue : any = "";

  constructor(
    @Optional()
    @Host()
    public popover: SatPopover
  ) {}

  ngOnInit() {
    // subscribe to cancellations and reset form value
    if (this.popover) {
      this.popover.closed
        .filter(val => val == null)
        .subscribe(() => (this.cellValue = this.value || ""));
    }
  }

  onSubmit() {
    if (this.popover) {
      this.popover.close(this.cellValue);
    }
  }

  onCancel() {
    if (this.popover) {
      this.popover.close();
    }
  }
}

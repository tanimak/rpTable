import { PeriodicElements } from "./../../../periodic-elements";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-body",
  templateUrl: "./form-body.component.html",
  styleUrls: ["./form-body.component.css"]
})
export class FormBodyComponent implements OnInit {
  constructor() {}
  element: PeriodicElements
  ngOnInit() { this.element= {
    status: 0,
    position: 1,
    name: "Hydrogen",
    weight: 1.0079,
    symbol: "H"
  };}

 


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

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.element);
  }
}

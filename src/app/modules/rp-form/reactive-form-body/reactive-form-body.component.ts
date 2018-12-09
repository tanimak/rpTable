import { TestServiceService } from "./../../../test-service.service";
import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray
} from "@angular/forms";
import { RpColumnDef } from "../../rp-table/rp-column-def";
import { RPRowElement } from "../../rp-table/rp-row-element";
import { RpCellDef } from "../../rp-table/rp-cell-def";
import { CellType } from "../../rp-table/cell-type.enum";

@Component({
  selector: "app-reactive-form-body",
  templateUrl: "./reactive-form-body.component.html",
  styleUrls: ["./reactive-form-body.component.css"]
})
export class ReactiveFormBodyComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: "Whirlwind",
    addresses: [
      { street: "123 Main", city: "Anywhere", state: "CA", zip: "94801" },
      { street: "456 Maple", city: "Somewhere", state: "VA", zip: "23226" }
    ]
  };

  heroForm: FormGroup;
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

  constructor(
    private fb: FormBuilder,
    private heroService: TestServiceService
  ) {
    this.createForm();
    //this.logNameChange();
    
  }

  // createForm() {
  //   this.heroForm = this.fb.group({
  //     name: ["", Validators.required],
  //     secretLairs: this.fb.array([]), // <-- a FormGroup with a new address
  //     power: "",
  //     sidekick: ""
  //   });
  // }

  createForm(){
    this.heroForm = this.fb.group(new RpColumnDef<RPRowElement>("Name", "name", "string", 25, new RpCellDef(CellType.Select,this.states)));
 }
  ngOnChanges() {
    this.heroForm.reset({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });
  }

  evilResponseProps = Object.keys(new RpColumnDef<RPRowElement>("Name", "name", "string", 25, new RpCellDef(CellType.Select,this.states)));
// Step 2. Create an empty array.
goodResponse = [];
// Step 3. Iterate throw all keys.



  

// for (evilResponseProps) { 
//     this.goodResponse.push(evilResponseProps[prop]);
// }

  // setAddresses(addresses: Address[]) {
  //   const addressFGs = addresses.map(address => this.fb.group(address));
  //   const addressFormArray = this.fb.array(addressFGs);
  //   this.heroForm.setControl("secretLairs", addressFormArray);
  // }

  get secretLairs(): FormArray {
    return this.heroForm.get("secretLairs") as FormArray;
  }

  addLair() {
    //this.secretLairs.push(this.fb.group(new Address()));
    let evilResponseProps = Object.values(new RpColumnDef<RPRowElement>("Name", "name", "string", 25, new RpCellDef(CellType.Select,this.states)));
    console.log(evilResponseProps);
    for (let prop of evilResponseProps) { 
      console.log(prop);
      this.goodResponse.push(prop);
  }
  console.log(this.goodResponse);
  }
 
  test() {
    console.log("Alright You got this");
  }

  // nameChangeLog: string[] = [];
  // logNameChange() {
  //   const nameControl = this.heroForm.get("name");
  //   nameControl.valueChanges.forEach((value: string) =>
  //     this.nameChangeLog.push(value)
  //   );
  // }

  onSubmit() {
    console.log("Saving");
    //this.hero = this.prepareSaveHero();
    //this.heroService.updateHero(this.hero).subscribe(/* error handling */);
    //  this.ngOnChanges();
  }

  prepareSaveHero(): Hero {
    const formModel = this.heroForm.value;

    // deep copy of form model lairs
    const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
      (address: Address) => Object.assign({}, address)
    );

    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const saveHero: Hero = {
      id: this.hero.id,
      name: formModel.name as string,
      // addresses: formModel.secretLairs // <-- bad!
      addresses: secretLairsDeepCopy
    };
    return saveHero;
  }

  revert() {
    this.ngOnChanges();
  }

  ngOnInit() {}
}
//stub classes are provided externally
export class Hero {
  id = 0;
  name = "";
  addresses: Address[];
}

export class Address {
  street = "";
  city = "";
  state = "";
  zip = "";
}

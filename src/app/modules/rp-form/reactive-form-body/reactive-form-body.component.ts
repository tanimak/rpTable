import { TestServiceService } from "./../../../test-service.service";
import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray
} from "@angular/forms";

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
    this.logNameChange();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ["", Validators.required],
      secretLairs: this.fb.array([]), // <-- a FormGroup with a new address
      power: "",
      sidekick: ""
    });
  }

  ngOnChanges() {
    this.heroForm.reset({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });
  }

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl("secretLairs", addressFormArray);
  }

  get secretLairs(): FormArray {
    return this.heroForm.get("secretLairs") as FormArray;
  }

  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }

  test() {
    console.log("Alright You got this");
  }

  nameChangeLog: string[] = [];
  logNameChange() {
    const nameControl = this.heroForm.get("name");
    nameControl.valueChanges.forEach((value: string) =>
      this.nameChangeLog.push(value)
    );
  }

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

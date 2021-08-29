import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  isAnonimus = false;

  personFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    secondname: new FormControl(''),
    secondlastname: new FormControl(''),
    marriedlastname: new FormControl(''),
    email: new FormControl('', Validators.email),
    gender: new FormControl(''),
    phone: new FormControl(''),
    nit: new FormControl(''),
    dpi: new FormControl(''),
    branch: new FormControl(),
    deparament: new FormControl(),
    township: new FormControl()
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onFormVo(form: FormGroup) {
    console.log(form);
  }
}

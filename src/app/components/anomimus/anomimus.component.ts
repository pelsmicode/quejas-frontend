import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-anomimus',
  templateUrl: './anomimus.component.html',
  styleUrls: ['./anomimus.component.css']
})
export class AnomimusComponent implements OnInit {

  anonimusFormGroup = new FormGroup({
    branch : new FormControl('', Validators.required),
    department : new FormControl('', Validators.required),
    towmship: new FormControl('', Validators.required),
    phone: new FormControl(''),
    email: new FormControl('', Validators.email)
  });

  constructor() { }

  ngOnInit(): void {
  }

  onFormVo(form: FormGroup) {
    console.log(form);
  }
}

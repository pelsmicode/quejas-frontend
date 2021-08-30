import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Department } from 'src/app/model/deparment';
import { Branch } from 'src/app/model/diaco.branch';
import { Township } from 'src/app/model/township';
import { DeparmentsService } from 'src/app/service/deparments.service';
import { DiacoBranchService } from 'src/app/service/diaco-branch.service';
import { TownshipService } from 'src/app/service/township.service';

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

  deparments: Department[] = [];
  townships: Township[] = [];
  diacoBranches: Branch[] = [];

  constructor(private departmentService: DeparmentsService, private townshipService: TownshipService, 
    private diacoBranchService: DiacoBranchService) { }

  ngOnInit(): void {
    this.onDeparments();
    this.onDiacoBranch();
  }

  onFormVo(form: FormGroup) {
    console.log(form);
  }

  onDeparments() {
    this.departmentService.getDepartment().subscribe(data => {
      this.deparments = data;
      console.log(this.deparments);
    })
  }

  onDiacoBranch() {
    this.diacoBranchService.getDiacoBranch().subscribe(data => {
      this.diacoBranches = data;
    })
  }

  changeOnDeparments(event: any) {
    let id = event.target.value
    if (id) {
      this.townshipService.getTownshipByDeparmentId(id).subscribe(data => {
        this.townships = data
        console.log(this.townships)
      })
    } else {
      console.log("novo")
    }
  }
}

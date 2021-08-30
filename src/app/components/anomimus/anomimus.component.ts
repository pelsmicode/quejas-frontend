import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from 'src/app/model/deparment';
import { Branch } from 'src/app/model/diaco.branch';
import { Township } from 'src/app/model/township';
import { DeparmentsService } from 'src/app/service/deparments.service';
import { DiacoBranchService } from 'src/app/service/diaco-branch.service';
import { TownshipService } from 'src/app/service/township.service';

@Component({
  selector: 'app-anomimus',
  templateUrl: './anomimus.component.html',
  styleUrls: ['./anomimus.component.css']
})
export class AnomimusComponent implements OnInit {

  anonimusFormGroup = new FormGroup({
    branch: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    township: new FormControl('', Validators.required),
    phone: new FormControl(''),
    email: new FormControl('', Validators.email)
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

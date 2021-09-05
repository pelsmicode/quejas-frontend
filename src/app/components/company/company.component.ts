import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from 'src/app/model/deparment';
import { Township } from 'src/app/model/township';
import { DeparmentsService } from 'src/app/service/deparments.service';
import { TownshipService } from 'src/app/service/township.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companyFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl(''),
    nit: new FormControl(''),
    address: new FormControl(''),
    township: new FormControl(),
    department: new FormControl()
  });

  deparments: Department[] = [];
  townships: Township[] = [];
  
  constructor(private departmentService: DeparmentsService, private townshipService: TownshipService) { }

  ngOnInit(): void {
    this.onDeparments();
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

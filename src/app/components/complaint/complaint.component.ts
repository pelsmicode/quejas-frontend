import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/model/person';
import { ComplaintService } from 'src/app/service/complaint.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
  idPerson: number = 0;
  idCompany: number = 0;

  companyFormGroup = new FormGroup({
    nodoc: new FormControl('', Validators.required),
    datedoc: new FormControl(''),
    detail: new FormControl(''),
    petition: new FormControl(''),
    company: new FormControl(this.idCompany),
    person: new FormControl(this.idPerson)
  });

  constructor(private complaintService: ComplaintService) {
  }

  ngOnInit(): void {
    this.onPersonComplaint();
    this.onCompanyComplaint();
  }

  onFormVo(form: FormGroup) {
    console.log(form);
  }

  onPersonComplaint() {
    this.complaintService.getPersonComplaint().subscribe(data => {
      this.idPerson = data;
      console.log("person", this.idPerson);
      this.companyFormGroup.patchValue({
        person: this.idPerson
      });
    });
  }

  onCompanyComplaint() {
    this.complaintService.getCompanyComplaint().subscribe(data => {
      this.idCompany = data;
      console.log("company", this.idCompany);
      this.companyFormGroup.patchValue({
        company: this.idCompany
      });
    });
  }
}

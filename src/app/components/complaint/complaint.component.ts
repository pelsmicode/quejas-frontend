import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { Complaint } from 'src/app/model/complaint';
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

  constructor(private complaintService: ComplaintService, private router: Router) {
  }

  ngOnInit(): void {
    this.onCompanyComplaint();
    this.onPersonComplaint();
  }

  onFormVo(form: FormGroup) {
    console.log(form);
  }

  onPersonComplaint() {
    this.complaintService.getPersonComplaint().subscribe(data => {
      const p: Person = data;
      this.idPerson = p.id
      console.log("person", this.idPerson, 'data', data);
      this.companyFormGroup.patchValue({
        person: this.idPerson
      });
    });
    
  }

  onCompanyComplaint() {
    this.complaintService.getCompanyComplaint().subscribe(data => {
      const c: Company = data;
      this.idCompany = c.id
      console.log("company", this.idCompany, 'data', data);
      this.companyFormGroup.patchValue({
        company: this.idCompany + 1
      });
    });
  }

  saveComplaint(complaint:Complaint) {
    let d = this.complaintService.saveComplaint(complaint).subscribe(data => {
      return data
    });
    alert("Proceso de queja realizado")
    this.router.navigate(['/main']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Complaint } from 'src/app/model/complaint';
import { ComplaintService } from 'src/app/service/complaint.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  complaints: Complaint[] = [];

  constructor(private complaintService: ComplaintService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.complaintService.getComplaintMain().subscribe(data => {
      this.complaints = data
      console.log(this.complaints);
    })
  }

}

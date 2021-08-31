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
  title = 'appBootstrap';
  
  closeResult: string = '';

  constructor(private complaintService: ComplaintService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.complaintService.getComplaintMain().subscribe(data => {
      this.complaints = data
      console.log(this.complaints);
    })
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  // TODO: Agregar botones que redireccionen a la creación de contenidos
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}

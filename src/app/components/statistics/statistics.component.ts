import { Component, OnInit } from '@angular/core';
import { Complaint } from 'src/app/model/complaint';
import { Department } from 'src/app/model/deparment';
import { Township } from 'src/app/model/township';
import { ComplaintService } from 'src/app/service/complaint.service';
import { DeparmentsService } from 'src/app/service/deparments.service';
import { TownshipService } from 'src/app/service/township.service';
import LinearGradient from 'zrender/lib/graphic/LinearGradient';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  options: any;
  complaints: Complaint[] = [];
  deparments: Department[] = [];
  timesDep = new Map<string, number>();

  constructor(private complaintService: ComplaintService, private deparmentService: DeparmentsService) {
    this.getMainComplaint();
    this.getDeparments();
    this.setMapDeparments();
    this.departmentsByTownship(this.getTownshipFromComplaintPerson(this.complaints));
  }

  ngOnInit(): void {
  }

  getMainComplaint() {
    this.complaintService.getComplaintMain().subscribe(data => {
      this.complaints = data;
      console.log("data complaint", this.complaints)
    });
  }

  getDeparments() {
    this.deparmentService.getDepartment().subscribe(data => {
      this.deparments = data
      console.log("data deparment", this.deparments)
    });
  }

  getTownshipFromComplaintPerson(complaints: Complaint[]): Township[] {
    let twonships: Township[] = [];
    complaints.forEach(element => {
      twonships.push(element.person.township)
    });

    return twonships;
  }

  departmentsByTownship(townships: Township[]) {
    townships.forEach(element => {

      if (this.deparments.includes(element.department)) {
        let n = this.timesDep.get(element.department.name);
        if (n)
          this.timesDep.set(element.department.name, n += 1);
      }
    });
  }

  setMapDeparments() {
    this.deparments.forEach(element => {
      this.timesDep.set(element.name, 0);
    });
  }
}

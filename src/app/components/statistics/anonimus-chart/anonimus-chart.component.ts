import { Component, Input, OnInit } from '@angular/core';
import { Complaint } from 'src/app/model/complaint';
import { ComplaintService } from 'src/app/service/complaint.service';

@Component({
  selector: 'app-anonimus-chart',
  templateUrl: './anonimus-chart.component.html',
  styleUrls: ['./anonimus-chart.component.css']
})
export class AnonimusChartComponent implements OnInit {

  complaints: Complaint[] = [];
  data: any[] = [];
  options: any;

  constructor(private complaintService: ComplaintService) { }

  ngOnInit(): void {
    this.getComplaints();
  }

  personsComplaint() {
    let anonimus: number = 0;
    let notAnonimus: number = 0;

    this.complaints.forEach(element => {
      if (element.person.name === 'ANONIMO') {
        anonimus++;
      } else {
        notAnonimus++;
      }
    });

    this.data = [
      { value: anonimus, name: 'ANONIMO' },
      { value: notAnonimus, name: 'NO ANONIMAS' }
    ]
    console.log(this.data)
  }

  getComplaints() {
    this.complaintService.getComplaintMain().subscribe(data => {
      this.complaints = data;
      this.personsComplaint();
      this.getStats();
    })
  }

  getStats() {
    this.options = {
      title: {
        text: 'Gráfica Anónimos y no Anónimos',
        subtext: 'Información',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        x: 'center',
        y: 'bottom',
        //data: ['rose1', 'rose2']
      },
      calculable: true,
      series: [
        {
          name: 'area',
          type: 'pie',
          radius: [30, 110],
          roseType: 'area',
          data: this.data
        }
      ]
    };
  }
}

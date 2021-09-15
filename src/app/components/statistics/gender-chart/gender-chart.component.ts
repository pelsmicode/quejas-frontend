import { Component, OnInit } from '@angular/core';
import { Complaint } from 'src/app/model/complaint';
import { ComplaintService } from 'src/app/service/complaint.service';

@Component({
  selector: 'app-gender-chart',
  templateUrl: './gender-chart.component.html',
  styleUrls: ['./gender-chart.component.css']
})
export class GenderChartComponent implements OnInit {

  complaints: Complaint[] = [];
  data: any[] = [];
  options: any;

  constructor(private complaintService: ComplaintService) { }

  ngOnInit(): void {
    this.getComplaints();
  }

  getComplaints() {
    this.complaintService.getComplaintMain().subscribe(data => {
      this.complaints = data;
      this.personComplaints();
      this.getStats();
    });
  }

  personComplaints() {
    let male = 0;
    let female = 0;
    let none = 0;

    this.complaints.forEach(i => {
      if (i.person.gender === 'M') {
        male++;
      } else if (i.person.gender === 'F') {
        female++;
      } else if (i.person.gender === 'N') {
        none++;
      }
    });

    this.data = [
      {value: none, name: 'No específicado'},
      {value: female, name: 'Femenino'},
      {value: male, name: 'Masculino'}
    ]
  }

  getStats() {
    this.options = {
      title: {
        text: 'Gráfica Genero',
        subtext: 'Información: Genero con más quejas',
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

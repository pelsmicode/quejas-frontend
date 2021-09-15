import { Component, OnInit } from '@angular/core';
import { Complaint } from 'src/app/model/complaint';
import { Department } from 'src/app/model/deparment';
import { Branch } from 'src/app/model/diaco.branch';
import { Township } from 'src/app/model/township';
import { ComplaintService } from 'src/app/service/complaint.service';
import { DeparmentsService } from 'src/app/service/deparments.service';
import { TownshipService } from 'src/app/service/township.service';

@Component({
  selector: 'app-deparment-chart',
  templateUrl: './deparment-chart.component.html',
  styleUrls: ['./deparment-chart.component.css']
})
export class DeparmentChartComponent implements OnInit {

  complaints: Complaint[] = [];
  departments: Department[] = [];
  townships: Township[] = [];
  data: any[] = [];
  options: any;

  constructor(private departmentService: DeparmentsService, private complaintService: ComplaintService,
    private townshipService: TownshipService) { }

  ngOnInit(): void {
    this.getComplaintsDeparments();
  }

  getComplaintsDeparments() {
    this.complaintService.getComplaintMain().subscribe(data => {
      this.complaints = data;
      this.departmentService.getDepartment().subscribe(d => {
        this.departments = d;
        this.towshipsDepartmens();
        this.getStats();
      });
    });

  }

  towshipsDepartmens() {
    let count = 0;
    let branches: Branch[] = [];
    let mapita = new Map<string, number>();
    this.complaints.forEach(i => {
      branches.push(i.person.branch)
    });
    
    branches.forEach((value, i) => {
      branches.forEach(j=> {
        if (value.id === j.id) {
          count++;
         // if (count > 1)
            mapita.set(`${value.name} ${value.township.name}`, count)
            //this.data[this.data.length-1].value = count;
          // else if (count === 1)
          //   this.data.push({value: count, name: `${value.name} ${value.township.name}`})
        }
      });
      count = 0;
    });
    this.data = Array.from(mapita, ([name, value]) => ({name, value}))
    console.log("dep data",mapita.size)
  }

  getStats() {
    this.options = {
      title: {
        text: 'Gráfica Sucursales DIACO',
        subtext: 'Información: Quejas por sucursal',
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

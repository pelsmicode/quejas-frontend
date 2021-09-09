import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from './components/person/person.component';
import { AnomimusComponent } from './components/anomimus/anomimus.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { CompanyComponent } from './components/company/company.component';
import { ComplaintComponent } from './components/complaint/complaint.component'
import { NgxEchartsModule } from 'ngx-echarts';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { DeparmentChartComponent } from './components/statistics/deparment-chart/deparment-chart.component';
import { GenderChartComponent } from './components/statistics/gender-chart/gender-chart.component';
import { AnonimusChartComponent } from './components/statistics/anonimus-chart/anonimus-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainViewComponent,
    PersonComponent,
    AnomimusComponent,
    HomeComponent,
    CompanyComponent,
    ComplaintComponent,
    StatisticsComponent,
    DeparmentChartComponent,
    GenderChartComponent,
    AnonimusChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

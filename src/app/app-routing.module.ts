import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './components/person/person.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { AnomimusComponent } from './components/anomimus/anomimus.component';
import { HomeComponent } from './components/home/home.component';
import { CompanyComponent } from './components/company/company.component';
import { ComplaintComponent } from './components/complaint/complaint.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "main", component: MainViewComponent },
  { path: "person", component: PersonComponent },
  { path: "company", component: CompanyComponent },
  { path: "anonimus", component: AnomimusComponent },
  { path: "complaint", component: ComplaintComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

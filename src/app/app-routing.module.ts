import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './component/person/person.component';
import { MainViewComponent } from './components/main-view/main-view.component';

const routes: Routes = [
  { path: "", redirectTo: "main", pathMatch: 'full' },
  { path: "main", component: MainViewComponent },
  { path: "person", component: PersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './components/person/person.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { AnomimusComponent } from './components/anomimus/anomimus.component';

const routes: Routes = [
  { path: "", redirectTo: "main", pathMatch: 'full' },
  { path: "main", component: MainViewComponent },
  { path: "person", component: PersonComponent },
  { path: "anonimus", component: AnomimusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

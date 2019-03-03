import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeersComponent } from "./components/beers/beers.component";

const routes: Routes = [
  { path: 'beers', component: BeersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }

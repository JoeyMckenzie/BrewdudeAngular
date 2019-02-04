import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BeersComponent} from "./components/beers/beers.component";
import {AuthGuard} from "../../common/helpers/auth-guard";

const routes: Routes = [
  { path: 'beers', component: BeersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }

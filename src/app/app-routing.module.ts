import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicModule} from "./modules/public/public.module";
import {SecureModule} from "./modules/secure/secure.module";
import {HomeComponent} from "./common/components/home/home.component";
import {AuthGuardService} from "./common/services/auth-guard/auth-guard.service";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'public', loadChildren: () => PublicModule },
  { path: 'secure', loadChildren: () => SecureModule, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

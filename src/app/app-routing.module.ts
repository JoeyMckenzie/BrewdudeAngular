import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicModule} from "./modules/public/public.module";
import {HomeComponent} from "./common/home/home.component";
import {SecureModule} from "./modules/secure/secure.module";
import {AuthGuard} from "./common/helpers/auth-guard";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'public', loadChildren: () => PublicModule },
  { path: 'secure', loadChildren: () => SecureModule, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

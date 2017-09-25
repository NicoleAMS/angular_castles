import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CastlesListComponent } from './castles/castles-list/castles-list.component';
import { CastlesDetailComponent } from './castles/castles-detail/castles-detail.component';
import { AuthGuard } from './_services/auth-guard.service';
import { RegisterComponent } from './membership/register/register.component';
import { LoginComponent } from './membership/login/login.component';
import { ManageCastlesComponent } from './admin/manage-castles/manage-castles.component';
import { AdminGuard } from './_services/admin-guard.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'visit', component: CastlesListComponent },
    { path: 'visit/:id', component: CastlesDetailComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin/castles/new', component: ManageCastlesComponent, canActivate: [AuthGuard, AdminGuard] },
    { path: 'admin/castles/edit/:id', component: ManageCastlesComponent, canActivate: [AuthGuard, AdminGuard] }
    // canActivate: [AuthGuard, AdminGuard]
    // canActivate: [AuthGuard]
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

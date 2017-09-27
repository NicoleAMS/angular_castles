import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CastlesListComponent } from './castles/castles-list/castles-list.component';
import { CastlesListItemComponent } from './castles/castles-list/castles-list-item/castles-list-item.component';
import { CastlesDetailComponent } from './castles/castles-detail/castles-detail.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './membership/register/register.component';
import { LoginComponent } from './membership/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ManageCastlesComponent } from './admin/manage-castles/manage-castles.component';

import { CastleService } from './_services/castle.service';
import { DataStorageService } from './_services/data-storage.service';
import { AuthService } from './_services/auth.service';
import { AuthGuard } from './_services/auth-guard.service';
import { AdminGuard } from './_services/admin-guard.service';
import { CastlesSearchComponent } from './castles/castles-search/castles-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CastlesListComponent,
    CastlesListItemComponent,
    CastlesDetailComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ManageCastlesComponent,
    CastlesSearchComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [CastleService, DataStorageService, AuthService, AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

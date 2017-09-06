import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CastlesListComponent } from './castles/castles-list/castles-list.component';
import { CastlesListItemComponent } from './castles/castles-list/castles-list-item/castles-list-item.component';
import { CastlesDetailComponent } from './castles/castles-detail/castles-detail.component';
import { HomeComponent } from './home/home.component';

import { CastleService } from './_services/castle.service';
import { DataStorageService } from './_services/data-storage.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'visit', component: CastlesListComponent },
  { path: 'visit/:id/:name', component: CastlesDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CastlesListComponent,
    CastlesListItemComponent,
    CastlesDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CastleService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

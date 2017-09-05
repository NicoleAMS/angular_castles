import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CastlesListComponent } from './castles/castles-list/castles-list.component';
import { CastlesListItemComponent } from './castles/castles-list/castles-list-item/castles-list-item.component';
import { CastlesDetailComponent } from './castles/castles-detail/castles-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CastlesListComponent,
    CastlesListItemComponent,
    CastlesDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

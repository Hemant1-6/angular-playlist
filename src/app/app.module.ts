import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoggingService } from "./logging.service";
import {HttpModule} from "@angular/http";

import { FormsModule }   from '@angular/forms';

import {HomeComponent} from './home/home.component';
import {DirectoryComponent} from './directory/directory.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FilterPipe } from './filter.pipe';
// import { HomeComponent } from './home/home.component';
// import { DirectoryComponent } from './directory/directory.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

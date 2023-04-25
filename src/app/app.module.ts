import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductDataService } from './services/product-data.service';

import { Products } from './data/data';
import { ProductCardComponent } from './objects/product-card/product-card.component';

import { MatButtonModule } from '@angular/material/button';
import { TagsComponent } from './objects/tags/tags.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './objects/sidebar/sidebar.component';

import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    TagsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [Products],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { TestComponent } from './sites/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    TagsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule
  ],
  providers: [Products],
  bootstrap: [AppComponent]
})
export class AppModule { }

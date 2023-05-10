import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductDataService } from './services/product-data.service';

import { ProductCardComponent } from './objects/product-card/product-card.component';

import { MatButtonModule } from '@angular/material/button';
import { TagsComponent } from './objects/tags/tags.component';
import { MatChipsModule } from '@angular/material/chips';
import { TestComponent } from './sites/test/test.component';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './objects/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    TagsComponent,
    TestComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

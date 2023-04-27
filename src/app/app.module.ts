import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { MatTabsModule } from '@angular/material/tabs';
import { AceEditorModule } from 'ng2-ace-editor';

import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './button/button.component';
import { OutputComponent } from './output/output.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatTabsModule,
    AceEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductCardComponent } from './objects/product-card/product-card.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { TagsComponent } from './objects/tags/tags.component';
import { MatChipsModule } from '@angular/material/chips';
import { TestComponent } from './sites/test/test.component';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './objects/sidebar/sidebar.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { DetailsComponent } from './sites/details/details.component';
import { RequestFormComponent } from './sites/request-form/request-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BasketComponent } from './sites/basket/basket.component';
import { OutputComponent } from './sites/output/output.component';
import { HeaderComponent } from './objects/header/header.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import { AppDataService } from './services/app-data.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    TagsComponent,
    TestComponent,
    SidebarComponent,
    DetailsComponent,
    RequestFormComponent,
    BasketComponent,
    OutputComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatExpansionModule,
    MatGridListModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatBadgeModule,
    MatSnackBarModule
  ],
  providers: [AppDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

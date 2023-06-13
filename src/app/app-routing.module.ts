import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './sites/test/test.component';
import { DetailsComponent } from './sites/details/details.component';
import { RequestFormComponent } from './sites/request-form/request-form.component';
import { BasketComponent } from './sites/basket/basket.component';
import { OutputComponent } from './sites/output/output.component';
import { DynamicRecComponent } from './sites/dynamic-rec/dynamic-rec.component';


const routes: Routes = [
  { path: '', component:TestComponent},
  { path: 'details/:id', component:DetailsComponent }, // legt die Route fest mit ID-Parameter
  { path: 'request', component:DynamicRecComponent},
  { path: 'basket', component:BasketComponent},
  { path: 'output', component:OutputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

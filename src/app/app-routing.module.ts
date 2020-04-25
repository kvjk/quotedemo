import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuoteSummaryComponent} from './quote-summary/quote-summary.component';
import {QuoteDetailsComponent} from './quote-details/quote-details.component';


const routes: Routes = [{path: '', component: QuoteSummaryComponent},{path:'details/:id', component: QuoteDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

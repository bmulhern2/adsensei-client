import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DocsComponent } from './docs/docs.component';
import { PayBillComponent } from './pay-bill/pay-bill.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SuccessComponent } from './success/success.component'

const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'payBill', component: PayBillComponent },
  { path: 'success', component: SuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

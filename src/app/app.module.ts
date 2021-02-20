import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DocsComponent } from './docs/docs.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { MatListModule } from '@angular/material/list'

import { HttpClientModule } from '@angular/common/http'

import { CookieService } from 'ngx-cookie-service'

import { FlexLayoutModule } from '@angular/flex-layout'

import { ClipboardModule } from '@angular/cdk/clipboard'

import { MatSortModule } from '@angular/material/sort'

import { MatPaginatorModule } from '@angular/material/paginator';
import { PayBillComponent } from './pay-bill/pay-bill.component';
import { SuccessComponent } from './success/success.component'

import { MatExpansionModule } from '@angular/material/expansion'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    AnalyticsComponent,
    DocsComponent,
    PayBillComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    HttpClientModule,
    FlexLayoutModule,
    ClipboardModule,
    MatSortModule,
    MatPaginatorModule,
    MatExpansionModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

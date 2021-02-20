import { Component, OnInit, ElementRef, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { HttpService } from '../http.service'
import { CookieService } from 'ngx-cookie-service'

declare var Stripe: any;

@Component({
  selector: 'app-pay-bill',
  templateUrl: './pay-bill.component.html',
  styleUrls: ['./pay-bill.component.css']
})
export class PayBillComponent implements OnInit {  count: number = 0;
  data: any;
  handler: any;
  total: number = 0;
  email: string;
  stripe: any;
  constructor(private cookieService: CookieService, private service: HttpService) { 
    this.email = this.cookieService.get('email')
  }
  ngOnInit() { 
    this.service.getStripeKey().subscribe((res: any) => {
      console.log(res);
      const key = res['stripeKey'];
      this.stripe = Stripe(key);
    });
    this.service.getRequests(this.email).subscribe(response => {
      if (response) {
        this.data = response;
        this.count = this.data['count'];
        this.total = this.count * 0.01
      } else {
        console.log("No Reponse.")
      }
    })
  }
    buy() {
      var sendables = {
        total: this.total,
        email: this.email
      }
      this.service.payBill(sendables).subscribe(res => {
        if (res) {
          console.log(res); 
        } else {
          console.log("No Res.")
        }
      })
    }
}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CookieService } from 'ngx-cookie-service'
import { Clipboard } from '@angular/cdk/clipboard'
import { Sort } from '@angular/material/sort'
import { Request } from '../Requests.interface'
 
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  count: number = 0;
  requests: any;
  data: any;
  token: any;
  value: string = 'Sign In To Earn A Key';
  sortedData: Request[] = [];
  email: string;
  constructor(private clipboard: Clipboard, private cookieService: CookieService, private service: HttpService) {
    this.email = this.cookieService.get('email');
   }
  ngOnInit() {
    this.service.getRequests(this.email).subscribe(response => {
      if (response) {
        this.data = response;
        this.count = this.data['count'];
        console.log(this.count);
        this.requests = this.data['request'];
        this.sortedData = this.requests.slice();
        console.log(this.requests);
      } else {
        console.log("No Response")
      }
    })
    this.service.getToken(this.email).subscribe(token => {
      if (token) {
        this.token = token;
        this.value = this.token['token'];
      } else {
        console.log("No Token.")
      }
    })
  }
  copy() {
    this.clipboard.copy(this.value)
  }
  sortData(sort: Sort) {
    const data = this.requests.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return
    }
    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case '_id': return compare(a._id, b._id, isAsc);
        case 'path': return compare(a.path, b.path, isAsc);
        case 'method': return compare(a.method, b.method, isAsc);
        case 'date': return compare(a.date, b.date, isAsc);
        default: return 0;
      }
    })
  } 
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1)
}

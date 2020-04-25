import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {QuoteResponse, Quotes} from './quote-response';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {


  // @ts-ignore
 //public quotes = new BehaviorSubject<QuoteResponse>(new QuoteResponse());


  constructor(private http: HttpClient) {
  }

 /* getQuotesServiceCall():Promise<QuoteResponse> {
    const url = 'https://552f1e11-ba1a-47f2-8e13-6755dd395434.mock.pstmn.io/quotes';
    const headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any>(url, {headers: headers});

  }*/

/* private fetchPosts() {
   this.http.get('https://552f1e11-ba1a-47f2-8e13-6755dd395434.mock.pstmn.io/quotes').subscribe(posts =>{
     console.log(posts);
   })
 }*/



  /*getQuotes():QuoteResponse {
    this.getQuotesServiceCall()(data=>{
      this.response = data;
    })
    return this.response;
  }*/


}

import {Component, OnChanges, OnInit} from '@angular/core';
import {QuoteService} from '../quote.service';
import {QuoteResponse, Quotes} from '../quote-response';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-quote-summary',
  templateUrl: './quote-summary.component.html',
  styleUrls: ['./quote-summary.component.css']
})
export class QuoteSummaryComponent implements OnInit{

  response: QuoteResponse;
  quotes:Quotes[]=[];
  index=1;
  constructor(private quoteService: QuoteService,private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchQuotes();
  }

  increment(): number {
   return this.index++;
  }

 private fetchQuotes() {
   this.http.get<QuoteResponse>('https://552f1e11-ba1a-47f2-8e13-6755dd395434.mock.pstmn.io/quotes').pipe(map(data => {
     for(const key in data._embedded.quotes) {
       this.quotes.push(data._embedded.quotes[key]);
   };return this.quotes;
   })).subscribe();
 }
}

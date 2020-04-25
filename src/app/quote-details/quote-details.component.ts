import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quote-response';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  quote:Quotes;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getQuote();
  }


  getQuote() {
  const id =  this.route.snapshot.params['id'];
  const url ='https://552f1e11-ba1a-47f2-8e13-6755dd395434.mock.pstmn.io/quotes/'+id;
  this.http.get<Quotes>(url).subscribe(data=>{
    this.quote = data;
    console.log(this.quote);
  });
  }

}

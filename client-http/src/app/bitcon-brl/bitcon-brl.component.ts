import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
  time: {
    updated: string;
  };
  disclaimer: string;
  bpi: {
    USD: {
      symbol: string;
      description; string;
      rate_float: number;
      rate: string;
    };
    BRL: {
      symbol: string;
      description; string;
      rate_float: number;
      rate: string;
    };
  };
}

@Component({
  selector: 'app-bitcon-brl',
  templateUrl: './bitcon-brl.component.html',
  styleUrls: ['./bitcon-brl.component.css']
})
export class BitconBrlComponent implements OnInit {
  currentPrice: Response;
  lastUpdate: Date;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.update();
  }

  update() {
    this.http.get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
    .subscribe(data => {
      this.lastUpdate = new Date();
      this.currentPrice = data;
    });
  }
}

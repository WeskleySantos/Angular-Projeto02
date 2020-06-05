import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { MatSnackBar } from '@angular/material'
interface Response {
  time: {
    updated: string;
  };
  disclaimer: string;
  bpi: {
    // Colaboração vaiosíssima do colega LUCAS VIANA DOS SANTOS
    [key in 'USD' | 'GBP' | 'EUR']: {
      symbol: string;
      description; string;
      rate_float: number;
      rate: string;
    };
  };
}

interface PriceUpdate {
  timestamp: Date;
  USD: number;
  GBP: number;
  EUR: number;
}

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  conta: number = 0;
  preco: any[] = [];
  currentPrice: Response;
  lastUpdate: Date;

  updateList: Array<PriceUpdate> = [];

  constructor(private notifica:MatSnackBar ,private http: HttpClient, private logger: LoggerService) {
   
  }
  teste(){
    return this.updateList['USD'];
  }
  update() {
    this.http.get<Response>('https://api.coindesk.com/v1/bpi/currentprice.json')
    .subscribe(data => {
      this.lastUpdate = new Date();
      this.currentPrice = data;
      this.updateList.push({
        timestamp: this.lastUpdate,
        USD: this.currentPrice.bpi.USD.rate_float,
        GBP: this.currentPrice.bpi.GBP.rate_float,
        EUR: this.currentPrice.bpi.EUR.rate_float
      });
    });
    this.lista();
  }
lista(){
  this.updateList.forEach(oba => {
    this.preco[this.conta+=1] = oba.EUR
  });

}

verifica(){
if (this.conta == 0) {
   return true;
} else {
  console.log("ENTRO");
  if (this.preco[this.preco.length] !== this.preco[this.preco.length -2]){
    this.update();
  this.notifica.open('DA','Fechar',{
    duration:5000,
    verticalPosition: 'top',
    horizontalPosition: 'right'
  
  })
  return true;
}
      }

}
}
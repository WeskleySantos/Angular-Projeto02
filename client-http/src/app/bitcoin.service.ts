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
  conta: number = 1;
  preco: any[] = [];
  currentPrice: Response;
  lastUpdate: Date;
  oba: PriceUpdate;
  updateList: Array<PriceUpdate> = [];

  constructor(private notifica:MatSnackBar ,private http: HttpClient, private logger: LoggerService) {
   
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
   
  }
lista(){
this.conta = 0;
for (const oba of this.updateList) {
  this.preco[this.conta+=1]= oba.EUR;
console.log(this.conta);
  
}
  this.verifica();
}

verifica(){
console.log(this.conta)
if (this.conta == 0) {

  console.log(this.preco[0] +" ---> "+ this.preco[this.preco.length]);
} else {

  console.log(this.preco[this.preco.length-1] +" ---> "+ this.preco[this.preco.length -2]);

  if (this.preco[this.preco.length-1] !== this.preco[this.preco.length]){
    console.log("Diferentes")
  this.notifica.open('Valor do BitCoin Atualizado','Fechar',{
    duration:5000,
    verticalPosition: 'top',
    horizontalPosition: 'right'
  
  })
  return true;
}
      }

}
}
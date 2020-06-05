import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';
import { LoggerService } from '../logger.service';
import { MatSnackBar } from '@angular/material'

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {
 preco: any[] = [];
 durationInSeconds = 5;
  constructor( private notifica: MatSnackBar, public bitcoinService: BitcoinService, private logger: LoggerService) {
    this.logger.add('ListBitcoinComponent constructed');
    }


  ngOnInit() {
 
this.bitcoinService.update();
  }

  getCurrentPrice() {
    return this.bitcoinService.currentPrice;
  }
  

  update() {
    this.bitcoinService.verifica();
  }

     
}

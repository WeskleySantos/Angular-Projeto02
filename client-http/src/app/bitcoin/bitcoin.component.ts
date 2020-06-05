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
  constructor(private notifica: MatSnackBar, public bitcoinService: BitcoinService, private logger: LoggerService) {
    this.logger.add('ListBitcoinComponent constructed');
    }


  ngOnInit() {
    this.logger.add('ListBitcoinComponent initialized');
    this.update();
  }

  getCurrentPrice() {
    return this.bitcoinService.currentPrice;
  }
  

  update() {
    this.bitcoinService.update();
    this.logger.add('ListBitcoinComponent rates updated');
    this.preco = this.bitcoinService.updateList;
    this.logger.add("!!!!!!!!!!!!!!!!");
    this.notifica.open('DA','Fechar',{
      duration:5000,
      verticalPosition: 'top',
      horizontalPosition: 'right'

    })
  }

  listar(){
this.bitcoinService.updateList.forEach(oba => {
  this.preco[1] = oba.EUR
});
this.logger.add('VAMO CLAN ' + this.preco[1]);
      }
     
}

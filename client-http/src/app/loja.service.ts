import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material'
@Injectable({
  providedIn: 'root'
})
export class LojaService {
  valor: number = 1000;
  constructor(private alerta: MatSnackBar) { }

comprar(descontar: number){
  if(descontar > this.valor){
   
  }else{
    this.valor = this.valor - descontar;
    this.alerta.open("Comprou BitCoin: R$"+ descontar, "Ok",{
      duration:5000,
      horizontalPosition: "center"
    });
  }
  
}
vender(receber: any){
  
  this.valor = this.atualizar() + parseInt(receber); 
  this.alerta.open("Vendeu BitCoin: R$"+ receber , "Ok",{
    duration:5000,
   
    horizontalPosition: "center"
  });
}

atualizar(){
  return this.valor;
}

}


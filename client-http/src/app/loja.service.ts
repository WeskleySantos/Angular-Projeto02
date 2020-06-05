import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LojaService {
  valor: number = 1000;
  constructor() { }

comprar(descontar: number){
  if(descontar > this.valor){
   
  }else{
    this.valor = this.valor - descontar;
  }
  
}
vender(receber: any){
  
  this.valor = this.atualizar() + parseInt(receber); 

}

atualizar(){
  return this.valor;
}

}


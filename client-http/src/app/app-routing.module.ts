import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { BitconBrlComponent } from './bitcon-brl/bitcon-brl.component';
import { ListComponent } from './list/list.component';
import { LojaComponent } from './loja/loja.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'bitcoin', component: BitcoinComponent},
  {path: 'bitcoin-brl', component: BitconBrlComponent},
  {path: 'list', component: ListComponent},
  {path: 'loja', component: LojaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

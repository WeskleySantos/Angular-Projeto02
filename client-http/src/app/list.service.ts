import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

interface Item {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ListService {

  list: Array<Item> = [
    {name: 'test 1'},
    {name: 'test 2'},
    {name: 'test 3'}
  ];

  getItems() {
    return this.list;
  }

  addItem(name: string) {
    this.list.push({name});
  }
  removeItem(item: Item) {
    const i = this.list.indexOf(item);
    if (i > -1) {
      this.list.splice(i, 1);
    }
  }
  removeItemByIndex(index: number) {
    this.list.splice(index, 1);
  }

  constructor(private logger: LoggerService) {
    this.logger.add('ListService constructed');
  }
}

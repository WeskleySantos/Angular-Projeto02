import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public listService: ListService, private logger: LoggerService) {
    this.logger.add('ListComponent constructed');
  }

  ngOnInit() {
    this.logger.add('ListComponent initialized');
  }

}

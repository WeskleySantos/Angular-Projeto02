import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { BitcoinService } from './bitcoin.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private timer: any;

  public counter = 0;

  constructor(private logger: LoggerService, private bit: BitcoinService) {
    this.logger.add('TimerService constructed');

  }

  start(ms: number) {
   
    if (!this.timer) {

      this.timer = setInterval(
        () => {
          this.counter++;
          console.log("Seg: " + this.getCount());
          if (this.counter % 10==0){
            console.log("10 s" );
            this.bit.update();
          }
        }, ms

        
      );
 
    }
  }
  stop() {
    if (this.timer) {
      this.logger.add('TimerService stoped');
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  getCount() {
    return this.counter;
  }
}

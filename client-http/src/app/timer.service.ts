import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private timer: any;

  public counter = 0;

  constructor(private logger: LoggerService) {
    this.logger.add('TimerService constructed');
  }

  start(ms: number) {
    if (!this.timer) {
      this.logger.add('TimerService started');
      this.timer = setInterval(
        () => {
          this.counter++;
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

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CycleItemsService {

  counter = 0;
  items = ['Gaming', 'Cooking', 'Tennis', 'Software', 'Formula 1', 'League of Legends', 'Barcelona', 'Fútbol', 'Team Liquid', 'E-sports', 'Star Wars', 'Space stuff'];

  constructor() { }

  createCycleService(): Observable<string> {

    return new Observable(
      observer => {
        setInterval(() => {
          observer.next(this.items[this.counter]);
          this.counter++;
          if (this.counter >= this.items.length) { this.counter = 0 }
        }, 250);
      }
    );
  }
}

import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Trooper } from '../../app/trooper/trooper.interface';

import { List } from './list.interface';

@Injectable()
export class ListsService {

    public lists: List[];

  constructor(
        private events: Events
  ) {

    const troopers: Trooper[] = [];

    for(var i = 3; i < 40; i++) {
      troopers.push({
        name: `trooper${i+1}`
      } as Trooper);
    }

      this.lists = [
          { name: 'list1', troopers },
          { name: 'list2', troopers: []}
      ];
  }

  public create(list: List){
    this.lists.push(list);
    this.events.publish('lists:added', list);
  }
}

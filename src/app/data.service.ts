import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

	private goals = new BehaviorSubject<any>(['Open a BB and have Tanea run it with me', 'Spend a whole year traveling']);
	goal = this.goals.asObservable(); 

  constructor() { }

  	changeGoal(goal) {
//  		this.goal.next(goal);
  	}

}

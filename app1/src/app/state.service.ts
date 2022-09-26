import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  state: any = null;

  constructor() {
    if (this.state == null) {
      // Set application startup state from session state (if exists)
      const sessionState = sessionStorage.getItem('state');
      if (sessionState) {
        this.state = JSON.parse(sessionState);
      } else {
        //  Set application startup state (using default state)
        this.state = {
          count: 0,
        }
      }
    }
  }

  saveState() {
    sessionStorage.setItem('state', JSON.stringify(this.state));
  }

  getState() {
    const sessionState = sessionStorage.getItem('state');
    if (sessionState) {
      this.state = JSON.parse(sessionState);
    }
  }

}

// Could use Redux if not wanting to use custom state managment service/services
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  state: any = null;  // Not using model only to keep demo small and focused

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

  getState() {
    const sessionState = sessionStorage.getItem('state');
    if (sessionState) {
      this.state = JSON.parse(sessionState);
    }
  }
  
  saveState() {
    sessionStorage.setItem('state', JSON.stringify(this.state));
  }


}

import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StateService } from '../state.service';

@Component({
  selector: 'app-module2',
  template: '',
  styleUrls: []
})
export class Module2Component implements OnInit {

  exampleDataToShare = {
    source: 'App1',
    description: 'Example data sent from Legacy to Modern',
    time: new Date
  }

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    // We are about to leave the app, so lets save state for when we return
    this.stateService.saveState();
    // Send data needed by App2/Module2 then redirect
    window.location.href = `${environment.modernUrl}/module2?data=${encodeURIComponent(JSON.stringify(this.exampleDataToShare))}`;
  }

}

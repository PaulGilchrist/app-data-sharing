import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module1',
  template: '',
  styleUrls: []
})
export class Module1Component implements OnInit {

  exampleData = {
    source: 'App2',
    description: 'Example data sent from Modern to Legacy',
    time: new Date
  }

  constructor() { }

  ngOnInit(): void {
    // Send data needed by App1/Module1 then redirect
    window.location.href = `http://localhost:4200/module1?data=${encodeURIComponent(JSON.stringify(this.exampleData))}`;
  }

}

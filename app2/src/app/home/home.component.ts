import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: '',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  exampleData = {
    source: 'App2',
    description: 'Example data sent from Modern to Legacy',
    time: new Date
  }

  constructor() { }

  ngOnInit(): void {
    // Send data needed by App1/Home then redirect
    window.location.href = `http://localhost:4200/home?data=${encodeURIComponent(JSON.stringify(this.exampleData))}`;
  }

}

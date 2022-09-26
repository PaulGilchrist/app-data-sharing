import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  inputData = {
    source: 'App1',
    description: 'Using local data',
    time: new Date
  }

  constructor(private router: ActivatedRoute, private stateService: StateService) { }

  ngOnInit(): void {
    console.log(this.stateService.state.count); // Show this will even show state changes after returning from App2
    // Simulate changing some state
    this.stateService.state.count++;
    // This can be an entry point from App2 so if data passed in querystring, get it before continuing
    let encodedData = this.router.snapshot.queryParamMap.get('data');
    if(encodedData) {
      this.inputData = JSON.parse(decodeURIComponent(encodedData));
      this.inputData.time = new Date(this.inputData.time);
    }
  }

}

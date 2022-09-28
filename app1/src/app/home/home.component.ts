import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  inputData: any = null // Not using model only to keep demo small and focused

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
    } else {
      // No data passed in, so get data from local state, remote API, environment, etc.
      this.inputData = {
        source: 'App1',
        description: 'Using local data',
        time: new Date
      }
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-module2',
  templateUrl: './module2.component.html',
  styleUrls: ['./module2.component.scss']
})
export class Module2Component implements OnInit {

  inputData: any = {} // Not using model only to keep demo small and focused
  
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    // This can be an entry point from App1 so if data passed in querystring, get it before continuing
    let encodedData = this.router.snapshot.queryParamMap.get('data');
    if(encodedData) {
      this.inputData = JSON.parse(decodeURIComponent(encodedData));
      this.inputData.time = new Date(this.inputData.time);
    } else {
      // No data passed in, so get data from local state, remote API, environment, etc.
      this.inputData = {
        source: 'App2',
        description: 'Using local data',
        time: new Date
      }
    }
  }

}

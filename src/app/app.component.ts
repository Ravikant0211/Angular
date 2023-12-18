import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counter: number;
  constructor(private counterService: CounterService) { }
  
  ngOnInit(): void {
    this.counterService.counterUpdated.subscribe(
      (count: number) => {
        this.counter = count;
      }
    );
  }
}

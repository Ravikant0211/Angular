import { EventEmitter } from "@angular/core";

export class CounterService {
    counterUpdated = new EventEmitter<number>();
    
    counter = 0;
    updateCounter() {
        this.counter++;
        this.counterUpdated.emit(this.counter);
    }
}
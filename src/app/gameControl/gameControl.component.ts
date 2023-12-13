import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-game-control',
    templateUrl: './gameControl.component.html',
    styles: []
})
export class GameControlComponent {
    @Output() intervalFired = new EventEmitter<number>();
    interval: any;
    lastNumber = 0;

    constructor() {}

    startGame() {
        this.interval = setInterval(() => {
            this.intervalFired.emit(this.lastNumber + 1);
            this.lastNumber++;
        }, 1000);
    }

    stopGame(){
        clearInterval(this.interval);
    }
}
import { Component } from "@angular/core";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styles: [`
        h3 {
            color: white;
            background-color: green;
        }
    `]
})
export class UserComponent {
    username: string = '';
    constructor() {}

    onEnterUsername(event: any): void {
        this.username = event.target.value;
    }

    onResetUsername(): void {
        this.username = '';
    }
}
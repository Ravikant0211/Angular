// import { Injectable } from "@angular/core";

// @Injectable() // you don't need to add @Injectable()
// if this service doesn't inject anything.
export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}
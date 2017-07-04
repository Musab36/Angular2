import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
    <h1>My first angular2 App</h1>
    <h3 (click)="doStuff(currentTask)" *ngFor="let currentTask of tasks">{{ currentTask.description }}</h3>

    </div>
    `
})

export class AppComponent {
public tasks: Task[] = [
    new Task("Create to Do-List app.", 0),
    new Task("Learn Kungfu.", 1),
    new Task("Rewatch all the lord of the rings movie.", 2),
    new Task("Do the laundry.", 3)
];
doStuff(clickedTask: Task) {
    if(clickedTask.done === true) {
        alert("This task is done")
    } else {
        alert("This task is not compeleted yet, get to work");
    }
}
}

export class Task {
    public done: boolean = false;
    constructor(public description: string, public id: number){ }
}

import { Component } from '@angular/core';
import {Task} from '../app/components/model/Task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo App v2';

  tasks : Task[];
  constructor() {
    this.tasks = []
  }
  addTaskEventEmitter($event : any){
    this.tasks.push(new Task($event.taskTitle));
    //console.log('Tasks are ', this.tasks);
  }
 
}

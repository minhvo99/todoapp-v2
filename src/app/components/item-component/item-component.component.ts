import { Component, Input, OnInit } from '@angular/core';
import { TaskStatus } from '../enum/enum';
import { Task } from '../model/Task';


@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.scss']
})
export class ItemComponentComponent implements OnInit {



  @Input() tasks : any;

  //public isComplete : boolean = false;

  


  constructor() { }

  ngOnInit(): void {
  }
  changeStatus(task : Task){
    if(task.status == TaskStatus.Complete){
      task.status = TaskStatus.notComplete;
    } else {
      task.status = TaskStatus.Complete;
    }
    //this.isComplete = !this.isComplete
  }
  

  deleteTask(task : any){
    let index = this.tasks.findIndex((item:any) => item['id'] == task.id);
    this.tasks.splice(index, 1);
  }

}

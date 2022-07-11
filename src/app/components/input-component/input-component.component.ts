import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss'],
})
export class InputComponentComponent implements OnInit {

  
  @Output() addTaskEventEmitter = new EventEmitter();
  taskForm!: FormGroup  ;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      taskTitle: ['', [Validators.required]],
    });
  }

  addItem($event : any) {
    if (this.taskForm.valid) {
      this.addTaskEventEmitter.emit(this.taskForm.value);
      this.taskForm.patchValue({
        taskTitle: '',
      });
    }
    //localStorage.setItem('todo', JSON.stringify(this.taskForm))
    
    //let data = JSON.parse(localStorage.getItem('todo'))
  }
}

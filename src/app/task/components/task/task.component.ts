import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '@core/models/interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Input() index: number;

  @Output() remove: EventEmitter<number> = new EventEmitter();
  @Output() completed: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  checkedEvent() {
    this.completed.emit(this.index);
  }

  removeEvent() {
    this.remove.emit(this.index);
  }

}

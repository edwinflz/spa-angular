import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Task } from '@core/models/interfaces/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskListCompleted: any[] = [];
  taskListPending: any[] = [];
  showInputTask: boolean = false;
  form: FormGroup;
  showCompleted: boolean = true;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  showTask() {
    this.showInputTask = true;
  }

  addTask(event: Event) {

    event.preventDefault();

    if (this.form.valid) {

      const task: Task = {
        date: new Date(),
        description: this.form.value.description,
        completed: false
      };

      this.taskListPending.push(task);

      this.showInputTask = false;

    }


  }

  removeTask(event) {
    this.taskListPending.splice(event, 1);
    console.log(this.taskListPending);
  }

  completedTask(event) {
    const task = this.taskListPending[event];
    task.completed = true;
    task.date = new Date();
    this.taskListPending.splice(event, 1);
    this.taskListCompleted.push(task);
    console.log(this.taskListCompleted);

  }

  get descriptionField() {
    return this.form.get('description');
  }

  buildForm() {
    this.form = this.formBuilder.group({
      description: ['', [Validators.required]]
    });
  }

}

import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @ViewChild('form', { static: false }) form: any;
  @Output() newTask = new EventEmitter();
  task = '';

  constructor() { }

  ngOnInit(): void {
  }

  doAddNewTask(): void {
    if (!this.form.valid) {
      return;
    }

    this.newTask.emit(this.task);
    this.form.reset();
    this.form.resetForm();
  }

}

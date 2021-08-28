import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() key: number = 0;
  @Output() deleteTask = new EventEmitter();
  animateItem = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.animateItem = true;
    }, 100);
  }

  doDeleteTask() {
    this.animateItem = false;

    setTimeout(() => {
      this.deleteTask.emit(this.key);
    }, 200);
  }

}

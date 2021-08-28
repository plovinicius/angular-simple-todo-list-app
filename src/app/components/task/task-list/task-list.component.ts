import { Component, Input, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TaskModel } from '../../../Models/TaskModel';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnChanges {
  @Input() items: TaskModel[] = [];
  @Output() deleteTask = new EventEmitter();
  hasItems = false;
  animateEmptyList = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.items.currentValue.length) {
      this.doShowList();
    } else {
      this.doHideList();
    }
  }

  doHideList() {
    this.hasItems = false;

    setTimeout(() => {
      this.animateEmptyList = false;
    }, 100);
  }

  doShowList() {
    this.animateEmptyList = true;

    setTimeout(() => {
      this.hasItems = true;
    }, 400);
  }

  doDeleteTask(index: number) {
    this.deleteTask.emit(index);
  }
}

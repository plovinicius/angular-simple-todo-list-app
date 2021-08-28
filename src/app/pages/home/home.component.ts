import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../../Models/TaskModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: TaskModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  doAddNewTask(task: string) {
    // Usado concat para dispara o evento de OnChanges no componente de lista (task-list)
    this.items = this.items.concat([{text: task}]);
  }

  doDeleteTask(index: number) {
    // Usado filter para disparar o evento OnChanges no componente de lista (task-list)
    this.items = this.items.filter((task, key) => {
      return key !== index;
    });
  }

}

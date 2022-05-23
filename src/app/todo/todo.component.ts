import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { TasksService } from '../tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks = this.tasksService.getTasks();
  inProgress = this.tasksService.getInProgress();
  done = this.tasksService.getDone();

  constructor(private tasksService: TasksService, private route: Router) { }

  ngOnInit(): void {
  }

  deleteTask(i: number, j: number) {
    this.tasksService.deleteTask(i, j);
  }

  goEdit(i: number, j: number) {
    this.route.navigate(['/edit'], { queryParams: { i: i, j: j } });
  }

  goInfo(i: number, j: number) {
    this.route.navigate(['/info'], { queryParams: { i: i, j: j } });
  }

  drop(event: CdkDragDrop<Task[]>) {
    this.tasksService.drop(event);
  }
}

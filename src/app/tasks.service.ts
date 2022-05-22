import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { Task } from './model/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = [{
    nombre: "Nombre de la primera tarea", contenido: "Contenido de la primera tarea.",
  }];
  inProgress: Task[] = [{
    nombre: "Nombre de la asdf tarea", contenido: "Contenido de la primera tarea.",
  }];
  done: Task[] = [];

  addTask(task: Task) {
    this.tasks.push(task);
  }

  deleteTask(i: number, j: number) {
    switch (j) {
      case 0:
        this.tasks.splice(i, 1);
        break;
      case 1:
        this.inProgress.splice(i, 1);
        break;
      case 2:
        this.done.splice(i, 1);
        break;
    }
  }

  getTasks() {
    return this.tasks;
  }

  getInProgress() {
    return this.inProgress;
  }

  getDone() {
    return this.done;
  }

  get(i: number, j: number): Task {
    var task!: Task;

    switch (j) {
      case 0:
        task = this.tasks[i];
        break;
      case 1:
        task = this.inProgress[i];
        break;
      case 2:
        task = this.done[i];
        break;
    }

    return task;
  }

  edit(i: number, j: number, task: Task) {
    switch (j) {
      case 0:
        this.tasks[i] = task;
        break;
      case 1:
        this.inProgress[i] = task;
        break;
      case 2:
        this.done[i] = task;
        break;
    }
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  constructor() { }
}

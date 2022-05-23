import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { Task } from './model/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  autores: string[] = ["Juan Carlos"];
  tasks: Task[] = [{
    nombre: "Nombre de la primera tarea", contenido: "Contenido de la primera tarea.", autor: this.autores[0]
  }];
  inProgress: Task[] = [{
    nombre: "Ejemplo de tarea en progreso", contenido: "Contenido de la tarea.", autor: this.autores[0]
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

  getAutors() {
    return this.autores;
  }

  getInProgress() {
    return this.inProgress;
  }

  getDone() {
    return this.done;
  }

  getAutor(autor: string): boolean {
    for (let i in this.autores) {
      if (this.autores[i] == autor) return true;
    }
    return false;
  }

  addAutor(autor: string) {
    this.autores.push(autor);
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

import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../model/task';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  i!: number;
  j!: number;
  form!: FormGroup;
  task!: Task;
  autors = this.tasksService.getAutors();

  constructor(private tasksService: TasksService, private route: ActivatedRoute, private fb: FormBuilder, private location: Location) {
  }

  ngOnInit() {
    var url = new URL(window.location.href);
    this.i = Number(url.searchParams.get("i"));
    this.j = Number(url.searchParams.get("j"));
    this.task = this.tasksService.get(this.i, this.j);

    this.form = this.fb.group({
      nombre: [this.task.nombre, Validators.required],
      contenido: [this.task.contenido],
      autor: [this.task.autor],
    })
  }

  edit() {
    const task = ({
      nombre: this.form.value.nombre,
      contenido: this.form.value.contenido,
      autor: this.form.value.autor,
    })
    this.tasksService.edit(this.i, this.j, task);
    this.location.back();
  }
  
  cancel() {
    this.location.back();
  }
}
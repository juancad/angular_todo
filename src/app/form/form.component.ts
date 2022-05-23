import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task } from '../model/task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  autors = this.tasksService.getAutors();

  constructor(private tasksService: TasksService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      contenido: [''],
      autor: ['', Validators.required],
    })
  }

  addTask() {
    this.tasksService.addTask({
      nombre: this.form.value.nombre,
      contenido: this.form.value.contenido,
      autor: this.form.value.autor,
    })
  }
}

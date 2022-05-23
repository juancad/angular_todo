import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  form!: FormGroup;
  mensaje!: string;

  constructor(private tasksService: TasksService, private fb: FormBuilder) { }

  addAutor() {
    if (this.tasksService.getAutor(this.form.value.autor)) {
      this.mensaje = "Este autor ya está registrado.";
    }
    else {
      this.tasksService.addAutor(this.form.value.autor);
      this.mensaje = "El autor se ha registrado correctamente.";
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      autor: ["", [Validators.required, Validators.maxLength(20)]],
    })
  }
}

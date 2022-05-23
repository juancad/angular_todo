import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../model/task';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  task!: Task;

  constructor(private tasksService: TasksService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    var url = new URL(window.location.href);
    this.task = this.tasksService.get(Number(url.searchParams.get("i")), Number(url.searchParams.get("j")));
  }

  goBack() {
    this.location.back();
  }
}

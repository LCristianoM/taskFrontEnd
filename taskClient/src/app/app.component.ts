import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  tasks: any[] = [];
  task = {
    id: null,
    name: '',
    completed: false,
  };

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.appService.getAll()
    .subscribe((data: any) => (this.tasks = data));
  }

  createAndSaveTask() {
    if (this.task.id) {
      this.appService.updateTask(this.task.id!, this.task)
      .subscribe(() => this.getAll());
    } else {
      this.appService.createTask(this.task)
      .subscribe(() => this.getAll());
    }

    this.task = {
      id: null,
      name: '',
      completed: false,
    };
  }

  updateTask(task: any) {
    this.task = {
      ...task
    };
  }

  deleteTask(task: any){
    this.appService.deleteTask(task.id)
    .subscribe(() => this.getAll())
  }
}

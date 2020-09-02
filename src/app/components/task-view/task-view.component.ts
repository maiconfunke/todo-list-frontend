import { Component, OnInit, ɵConsole } from '@angular/core';
import { Task } from '../../interfaces/task';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { BreadcrumbService } from '../breadcrumb/breadcrumb.service';
import { List } from 'src/app/interfaces/list';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  tasks: Task[] = [];
  list: List;
  constructor(
    private apiService: ApiService,
    private breadcrumbService: BreadcrumbService
    ) { }

  ngOnInit(): void {
   this.list = this.breadcrumbService.getCurrentListRoute();
   this.getTasks();
  }

  public createTask(task: Task): void {
    task.listId = this.list._id;
    this.apiService.createTask(task).subscribe((data) => this.getTasks());
  }

  public getTasks(): void {
    this.apiService.getTasksByList(this.list._id).subscribe((tasks) => {
      this.tasks = tasks as Task[];
    });
  }

}

import { Component, OnInit, ɵConsole } from '@angular/core';
import { Task } from '../../interfaces/task';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  listId: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.listId = id;
    });
  }

  createTask(task: Task) {
    task.listId = this.listId;
    console.log(task);
  }

}

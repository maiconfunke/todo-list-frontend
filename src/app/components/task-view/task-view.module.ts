import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskViewComponent } from './task-view.component';



@NgModule({
  declarations: [TaskViewComponent],
  exports: [TaskViewComponent],
  imports: [
    CommonModule
  ]
})
export class TaskViewModule { }

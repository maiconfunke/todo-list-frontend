import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './task-item.component';



@NgModule({
  declarations: [TaskItemComponent],
  exports: [TaskItemComponent],
  imports: [
    CommonModule
  ]
})
export class TaskItemModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskViewComponent } from './task-view.component';
import { ActionButtonModule } from '../action-button/action-button.module';
import { SearchItemModule } from '../search-item/search-item.module';
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { TaskItemModule } from '../task-item/task-item.module';
import { ModalModule } from '../modal/modal.module';



@NgModule({
  declarations: [TaskViewComponent],
  exports: [TaskViewComponent],
  imports: [
    CommonModule,
    ActionButtonModule,
    SearchItemModule,
    BreadcrumbModule,
    TaskItemModule,
    ModalModule
  ]
})
export class TaskViewModule { }

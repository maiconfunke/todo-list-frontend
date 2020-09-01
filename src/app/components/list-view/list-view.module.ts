import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view.component';



@NgModule({
  declarations: [ListViewComponent],
  exports: [ListViewComponent],
  imports: [
    CommonModule
  ]
})
export class ListViewModule { }

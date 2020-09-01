import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view.component';
import { ListCardModule } from '../list-card/list-card.module';
import { ActionButtonModule } from '../action-button/action-button.module';



@NgModule({
  declarations: [ListViewComponent],
  exports: [ListViewComponent],
  imports: [
    CommonModule,
    ListCardModule,
    ActionButtonModule
  ]
})
export class ListViewModule { }

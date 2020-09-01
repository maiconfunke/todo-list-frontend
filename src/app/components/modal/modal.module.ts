import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ActionButtonModule } from '../action-button/action-button.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ModalComponent],
  exports: [ModalComponent],
  imports: [
    CommonModule,
    ActionButtonModule,
    FormsModule
  ]
})
export class ModalModule { }

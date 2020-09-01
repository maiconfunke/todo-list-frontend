import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonComponent } from './action-button.component';



@NgModule({
  declarations: [ActionButtonComponent],
  exports: [ActionButtonComponent],
  imports: [
    CommonModule
  ]
})
export class ActionButtonModule { }

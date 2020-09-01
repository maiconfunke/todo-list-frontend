import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyDataComponent } from './empty-data.component';



@NgModule({
  declarations: [EmptyDataComponent],
  exports: [EmptyDataComponent],
  imports: [
    CommonModule
  ]
})
export class EmptyDataModule { }

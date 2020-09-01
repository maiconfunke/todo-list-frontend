import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from './search-item.component';



@NgModule({
  declarations: [SearchItemComponent],
  exports: [SearchItemComponent],
  imports: [
    CommonModule
  ]
})
export class SearchItemModule { }

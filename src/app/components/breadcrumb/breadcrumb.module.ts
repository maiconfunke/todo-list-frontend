import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbService } from './breadcrumb.service';



@NgModule({
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[BreadcrumbService]
})
export class BreadcrumbModule { }

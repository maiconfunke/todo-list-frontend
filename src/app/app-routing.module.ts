import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent } from './components/list-view/list-view.component';
import { TaskViewComponent } from './components/task-view/task-view.component';


const routes: Routes = [
  { path: 'lists', component: ListViewComponent },
  { path: 'list/:id/tasks', component: TaskViewComponent },
  { path: '**', redirectTo: 'lists', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

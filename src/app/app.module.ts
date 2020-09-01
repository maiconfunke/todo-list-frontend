import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewModule } from './components/task-view/task-view.module';
import { ListViewModule } from './components/list-view/list-view.module';
import { HeaderModule } from './components/header/header.module';
import { SearchItemModule } from './components/search-item/search-item.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListViewModule,
    TaskViewModule,
    HeaderModule,
    SearchItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

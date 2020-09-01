import { Component, OnInit } from '@angular/core';
import { List } from '../../interfaces/list';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public createList(list: List): void {
    console.log(list);
  }

}

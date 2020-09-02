import { Component, OnInit } from '@angular/core';
import { List } from '../../interfaces/list';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  isArchive = false;
  lists: List[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
   this.getLists();
  }

  public createList(list: List): void {
    this.apiService.createList(list).subscribe((data) => this.getLists());
  }

  public getLists() {
    this.apiService.getLists(this.isArchive).subscribe((lists) => {
      this.lists = lists as List[];
    });
  }

  public removeList(id: string) {
    this.apiService.removeList(id).subscribe((data) => {
      this.getLists();
     });
  }

  public archiveList(id: string) {
    this.apiService.archiveList(id).subscribe((data) => {
      this.getLists();
     });
  }

  public showArchivedLists({ target }) {
    this.isArchive = target.checked;
    this.getLists();
  }
}

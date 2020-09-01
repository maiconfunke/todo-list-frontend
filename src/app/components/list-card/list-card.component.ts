import { Component, OnInit, Input } from '@angular/core';
import { List } from '../../interfaces/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {

  @Input() list: List;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public showTasks(): void {
    this.router.navigateByUrl(`/list/${this.list._id}/tasks`);
  }

}

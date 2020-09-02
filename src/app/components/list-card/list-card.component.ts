import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { List } from '../../interfaces/list';
import { Router } from '@angular/router';
import { BreadcrumbService } from '../breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {

  @Input() list: List;
  @Output() onRemove = new EventEmitter();
  @Output() onArchive = new EventEmitter();

  constructor(private router: Router, private breadCrumbService: BreadcrumbService) { }

  ngOnInit(): void {
  }

  public showTasks(): void {
    this.breadCrumbService.setCurrentListRoute(this.list);
    this.router.navigateByUrl(`/list/${this.list._id}/tasks`);
  }

  public removeList(id: string): void {
    this.onRemove.emit();
  }

  public archiveList(id: string): void {
    this.onArchive.emit();
  }
}

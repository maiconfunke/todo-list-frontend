import { Injectable } from '@angular/core';
import { List } from 'src/app/interfaces/list';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private currentListRoute: List;
  constructor() { }

  public setCurrentListRoute(list: List) {
    this.currentListRoute = list;
  }

  public getCurrentListRoute(): List {
    return this.currentListRoute;
  }

}

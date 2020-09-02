import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../interfaces/list';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) { }

  public createList(list: List): Observable<List> {
    return this.http.post(`${this.url}/lists`, list);
  }

  public createTask(task: Task): Observable<Task> {
    return this.http.post(`${this.url}/tasks`, task);
  }

  public getListsActive(): Observable<List> {
    return this.http.get(`${this.url}/lists`);
  }

  public getTasksByList(listId: string): Observable<Task> {
    return this.http.get(`${this.url}/lists/${listId}/tasks`);
  }
}

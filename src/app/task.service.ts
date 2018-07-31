import { Injectable } from '@angular/core';
import { Task } from './task';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(
    private messageService: MessageService
  ) { }
  
  getTasks (): Observable<Task[]> {
    throw "Not implemented";
  }
  
  getTask (id: number): Observable<Task[]> {
    throw "Not implemented";
  }
  
  updateTask (task: Task): Observable<any> {
    throw "Not implemented";
  }
  
  addTask (task: Task): Observable<Task> {
    throw "Not implemented";
  }
  
  deleteTask (task: Task | number): Observable<Task> {
    throw "Not implemented";
  }
  
  searchTasks(term: string): Observable<Task[]> {
    throw "Not implemented";
  }
  
  private log(message: string) {
    this.messageService.add(`TaskService: ${message}`);
  }
  
  private tasksUrl = 'api/tasks';  // URL to web api
}

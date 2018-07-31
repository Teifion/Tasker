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
    private http: HttpClient,
    private messageService: MessageService
  ) { }
  
  getTasks (): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl)
      .pipe(
        tap(tasks => this.log('fetched tasks')),
        catchError(this.handleError('getTasks', []))
      );
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
  
  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
       
      console.error(error); // log to console
      
      this.log(`${operation} failed: ${error.message}`);
      
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  private log(message: string) {
    this.messageService.add(`TaskService: ${message}`);
  }
  
  private tasksUrl = 'api/tasks';  // URL to web api
}

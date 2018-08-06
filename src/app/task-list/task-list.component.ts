import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  
  constructor(private taskService: TaskService) { }
  
  ngOnInit() {
    this.getTasks();
  }
  
  getTasks(): void {
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }
  
  add(name: string, owner: string): void {
    name = name.trim();
    owner = owner.trim();
    
    if (!name) { return; }
    if (!owner) { return; }
    
    let task = { name, owner } as Task;
    task.progress = 0;
    task.status = "Created task";
    task.logs = ["Created task"];
    
    // , 0, "Created task", ["Created task"]
    this.taskService.addTask(task)
      .subscribe(task => {
        this.tasks.push(task);
      });
  }
}

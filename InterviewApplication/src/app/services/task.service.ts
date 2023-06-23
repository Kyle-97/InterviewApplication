import { Injectable } from '@angular/core';
import { TaskSummary } from '../models/Task.model';
import { Observable, delay, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // Mock gettings tasks from API with 1 second response time
  getAllTasks(): Observable<TaskSummary[]> {
    const date = new Date();

    return of([
      {
        id: 1,
        name: 'Task 1',
        description: 'Some task description 1',
        taskDueDate: new Date(date.setDate(date.getDate() + 1))
      },
      {
        id: 2,
        name: 'Task 2',
        description: 'Some task description 2',
        taskDueDate: new Date(date.setDate(date.getDate() + 4))
      },
      {
        id: 3,
        name: 'Task 3',
        description: 'Some task description 3',
        taskDueDate: new Date(date.setDate(date.getDate() + 10))
      },
      {
        id: 4,
        name: 'Task 4',
        description: 'Some task description 4',
      },
      {
        id: 3,
        name: 'Task 5',
        description: 'Some task description 5',
        taskDueDate: new Date(date.setDate(date.getDate() + 25))
      }
    ]).pipe(
      delay(1000),
      map(res => res.map(x => new TaskSummary(x)))
    )
  }
}

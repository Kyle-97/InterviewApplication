import { Component, OnInit } from '@angular/core';
import { TaskSummary } from '../models/Task.model';
import { TaskService } from '../services/task.service';
import { UserPermissionsService } from '../services/user-permissions.service';

@Component({
  selector: 'app-tasks-summary',
  templateUrl: './tasks-summary.component.html',
  styleUrls: ['./tasks-summary.component.css']
})
export class TasksSummaryComponent implements OnInit {
  isLoading = false;
  tasks: TaskSummary[] = [];
  hideDeleteButton: boolean;

  constructor(private taskService: TaskService, private permissionsService: UserPermissionsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getTasks();
    this.getDeletePermission();
  }

  private getTasks() {
    this.taskService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.isLoading = false;
    });
  }

  private getDeletePermission() {
    this.permissionsService.getUserPermissions().subscribe(permissions => {
      this.hideDeleteButton = !permissions.includes('Delete');
      this.isLoading = false;
    })
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksSummaryComponent } from './tasks-summary.component';
import { TaskService } from '../services/task.service';
import { UserPermissionsService } from '../services/user-permissions.service';
import { of } from 'rxjs';

describe('TasksSummaryComponent', () => {
  let component: TasksSummaryComponent;
  let fixture: ComponentFixture<TasksSummaryComponent>;

  //#region Spies

  let taskServiceSpy: jasmine.SpyObj<TaskService>;
  let permissionServiceSpy: jasmine.SpyObj<UserPermissionsService>;

  //#endregion

  beforeEach(async () => {
    taskServiceSpy = jasmine.createSpyObj<TaskService>('TaskService', [ 'getAllTasks' ]);
    taskServiceSpy.getAllTasks.and.returnValue(of([]));

    permissionServiceSpy = jasmine.createSpyObj<UserPermissionsService>('PermissionsService', ['getUserPermissions']);
    permissionServiceSpy.getUserPermissions.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [ TasksSummaryComponent ],
      imports: [
        { provide: TaskService, useValue: taskServiceSpy },
        { provide: UserPermissionsService, userValue: permissionServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

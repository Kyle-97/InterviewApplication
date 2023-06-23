import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPermissionsService {

  constructor() { }

  // Mock getting user permissions with 2 second response
  getUserPermissions(): Observable<string[]> {
    return of([
      'View'
    ]).pipe(
      delay(2000)
    );
  }
}

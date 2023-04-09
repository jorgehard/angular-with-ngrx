import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { courses } from 'src/assets/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() { }

  list(params: any): Observable<any> {
    return of(courses).pipe(
      map((response: any) => (
        {
          ...response,
          data: {
            content: courses.dataList,
            totalPages: courses.totalPages,
            totalElements: courses.totalElements
          }
        }
      ))
    )
  }
}

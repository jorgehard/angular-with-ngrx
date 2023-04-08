import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap, first } from 'rxjs/operators';
import { courses } from 'src/assets/courses';

import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() { }

  list() {
    return of(courses)
  }
}

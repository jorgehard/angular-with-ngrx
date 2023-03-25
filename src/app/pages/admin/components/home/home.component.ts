import { Component } from '@angular/core';
import { Course } from '../../models/course';
import { CoursesService } from '../../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  courses: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(private readonly coursesService: CoursesService){
    this.courses = this.coursesService.list();
  }
}

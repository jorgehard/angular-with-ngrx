import { Component, Input } from '@angular/core';
import { CourseStateInterface } from 'src/app/shared/models/courses.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  @Input() courses$: CourseStateInterface | any;
  displayedColumns = ['name', 'category'];
}

import { Component, OnInit } from '@angular/core';
import { Course } from '../../../shared/models/course';
import { CoursesService } from '../../../shared/services/courses.service';

@Component({
    selector: 'app-home-container',
    template: `<app-home
    [courses$]="courses$"
    ></app-home>`
})

export class HomeContainerComponent implements OnInit {
    courses$!: Course[];

    constructor(
        private coursesService: CoursesService
    ) { }

    ngOnInit(): void {
        this.getCourses()
    }

    getCourses(): void {
        this.coursesService.list().subscribe({
            next: (r) => this.courses$ = r,
            error: (e) => console.log('err', e)
        })
    }
}
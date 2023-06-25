import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/shared/reducers';
import { selectorCourse } from 'src/app/shared/selectors/courses/courses.select';
import { CourseRequest } from 'src/app/shared/actions/courses/courses.actions';

@Component({
    selector: 'app-home-container',
    template: `<app-home
    [courses$]="courses$ | async"
    ></app-home>`
})

export class HomeContainerComponent implements OnInit {
    public courses$ = this.store.select(selectorCourse);

    constructor(
        private store: Store<State>
    ) { }

    ngOnInit(): void {
      this.store.dispatch(CourseRequest({ params: ''}))
    }
}

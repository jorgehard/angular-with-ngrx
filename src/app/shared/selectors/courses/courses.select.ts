import { CourseStateInterface } from "../../models/courses.interface";
import { State } from "../../reducers";

export const selectorCourse = (state: State): CourseStateInterface =>
state.course;

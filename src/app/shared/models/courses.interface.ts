import { StoreStateInterface } from "./store-state.interface";

export interface Course {
    _id: string;
    name: string;
    category: string;
  };

  export interface CourseStateInterface extends StoreStateInterface {
    data: Course[],
    totalElements: number;
    totalPages: number;
    paginateLoading: boolean;
  }

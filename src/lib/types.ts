export interface Cohort {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  students: Student[];
}

export interface Student {
  id: number;
  name: string;
  email: string;
  cohortId: number;
  lessons: Lesson[];
}

export interface Lesson {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  studentId: number;
}
import { Component, Input } from '@angular/core';
import { course } from '../../model/course';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  courseTotallist: course[] = [];
  selected: string = 'All';
  domains: string[] = ['CSE', 'Science', 'Mathematics','Marketing'];
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.api.getCourses().subscribe({
      next: (result: course[]) => (this.courseTotallist = result),
      error: (error) => console.log(error),
    });
  }
  onCourseClick(id: string) {
    const selectedcourse = this.courseTotallist.find(
      (course) => course.id === id
    );
    if (selectedcourse) {
      this.router.navigate(['/course', id], {
        state: { title: selectedcourse.name },
      });
    }
  }
}

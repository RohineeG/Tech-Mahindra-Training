import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { course } from '../../model/course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  courselist: course[] = [];

  constructor(private api: ApiService, private router:Router) {}

  ngOnInit() {
    this.api.getCourses().subscribe({
      next: (result: course[]) => (this.courselist = result),
      error: (error) => console.log(error),
    });
  }
    gotoCoursesPage(){
      this.router.navigate(['../courses']);
    }
    onCourseClick(id:string){
      const selectedcourse= 
      this.courselist.find(course => course.id === id);
      if (selectedcourse) {
        this.router.navigate(['/course', id], { state: { title: selectedcourse.name } });
      }
    }
  
}

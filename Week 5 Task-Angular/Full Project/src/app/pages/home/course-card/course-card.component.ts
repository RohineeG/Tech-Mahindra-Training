import { Component, Input } from '@angular/core';
import { course } from '../../../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input() course: course = {
    id: '',
    name: '',
    domain: '',
    instructor: '',
    rating: '',
    price: 0,
    image: '',
  };
  
}

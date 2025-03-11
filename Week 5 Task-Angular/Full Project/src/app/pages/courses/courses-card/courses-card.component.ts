import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { course } from '../../../model/course';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-courses-card',
  templateUrl: './courses-card.component.html',
  styleUrl: './courses-card.component.css'
})
export class CoursesCardComponent {
  constructor(private router:Router, private api:ApiService){}
  @Input() course: course = {
      id: '',
      name: '',
      domain: '',
      instructor: '',
      rating: '',
      price: 0,
      image: '',
    };
    toggleWishlist(course: any) {
      if (this.api.isInWishlist(course.id)) {
      } else {
        this.api.addToWishlist(course);
      }
    }
  
    // ✅ Check if Course is in Wishlist
    isInWishlist(courseId: number): boolean {
      return this.api.isInWishlist(courseId);
    }
}

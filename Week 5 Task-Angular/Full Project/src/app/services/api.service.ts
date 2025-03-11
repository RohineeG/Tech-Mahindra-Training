import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Course {
  id: number;
  // Add other properties of Course if needed
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8090/courses';
  private wishlistKey = 'wishlist';
  constructor(private http: HttpClient) {}

  getCourses(): Observable<any> {
    return this.http.get('http://localhost:4500/courses');
  }

  getContacts(): Observable<any> {
    return this.http.get('http://localhost:4500/contacts');
  }

  getCourseById(id: number): Observable<any> {
    return new Observable((observer) => {
      this.getCourses().subscribe((courses) => {
        console.log('All Courses:', courses); // Debugging

        const course = courses.find((c: Course) => c.id === id);
        console.log('Filtered Course:', course); // Debugging

        observer.next(course);
        observer.complete();
      });
    });
  }
  getCoursesDetails(id: string): Observable<any> {
    return this.http.get(`http://localhost:4500/courses?id=${id}`);
  }
  addEnroll(data: any): Observable<any> {
    return this.http.post('http://localhost:4500/enroll', data);
  }
  getWishlist(): any[] {
    const wishlist = localStorage.getItem(this.wishlistKey);
    return wishlist ? JSON.parse(wishlist) : [];
  }

  addToWishlist(course: any) {
    let wishlist = this.getWishlist();
    if (!wishlist.some((c) => c.id === course.id)) {
      wishlist.push(course);
      localStorage.setItem(this.wishlistKey, JSON.stringify(wishlist));
    }
  }

  isInWishlist(courseId: number): boolean {
    return this.getWishlist().some((c) => c.id === courseId);
  }
}

import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.css',
})
export class EnrollComponent {
  name: string = '';
  email: string = '';
  course: string = '';
  errors: string[] = [];

  courses: string[] = [
    'Web Development',
    'Digital Marketing',
    'Internet of Things',
    'Artificial Intelligence',
    'Machine Learning',
  ];
  constructor(private api: ApiService) {}
  submitForm() {
    this.errors = [];
    let emailPattern = /^[a-zA-Z0-9\._]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
    if (!this.name || this.name.length < 3) {
      this.errors.push('Name should be atleast three characters long');
    }
    if (!this.email || !emailPattern.test(this.email)) {
      this.errors.push('Invalid Email');
    }
    if (!this.courses || this.courses.length == 0) {
      this.errors.push('Please select a course');
    }

    if (this.errors.length == 0) {
      this.api
        .addEnroll({
          name: this.name,
          email: this.email,
          course: this.courses
        })
        .subscribe({
          next: (response) => {
            console.log('Enroll details:', response);
            this.name = '';
            this.email = '';
            this.course = '';
            alert('Enrolled successfully');
          },
          error: (error) => {
            alert('Error');
          },
        });
    }
  }
}

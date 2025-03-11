import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { course } from '../../../model/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent {
  id:any='';
  name: string = '';
  domain: string = '';
  instructor: string = '';
  rating:string='';
  price:number=0;
  image:string='';
  constructor(private route: ActivatedRoute, private router:Router,private api: ApiService) {
    this.id = this.route.snapshot.paramMap.get('id');
    const navigation = this.router.getCurrentNavigation();
    console.log(navigation)
    if (navigation?.extras.state) {
      this.name = navigation.extras.state['name'];
      console.log('Name:', this.name);
  }
}
ngOnInit() {

  this.api.getCoursesDetails(this.id).subscribe({
    next	: (result:any) => {
     console.log(result)
       this.name = result[0].name;
       this.domain=result[0].domain;
       this.instructor=result[0].instructor;
       this.rating=result[0].rating;
       this.price=result[0].price;
       this.image=`http://localhost:8090/${result[0].image}`;
    },
    error: (error:any) => console.log(error)
  });
}
}

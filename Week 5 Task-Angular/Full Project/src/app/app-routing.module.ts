import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursesCardComponent } from './pages/courses/courses-card/courses-card.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseDetailsComponent } from './pages/courses/course-details/course-details.component';
import { EnrollComponent } from './pages/enroll/enroll.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'course/:id', component: CourseDetailsComponent },
  { path: 'enroll', component: EnrollComponent },
  { path: 'wishlist', component: WishlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

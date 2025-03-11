import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { ContactItemComponent } from './pages/contacts/contact-item/contact-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseCardComponent } from './pages/home/course-card/course-card.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CoursesCardComponent } from './pages/courses/courses-card/courses-card.component';
import { CourseDetailsComponent } from './pages/courses/course-details/course-details.component';
import { EnrollComponent } from './pages/enroll/enroll.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { FiltercoursePipe } from './pipes/filtercourse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    MenuBarComponent,
    ContactItemComponent,
    CourseCardComponent,
    CoursesComponent,
    CoursesCardComponent,
    CourseDetailsComponent,
    EnrollComponent,
    WishlistComponent,
    FiltercoursePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, //template driven forms(ngModel)
    ReactiveFormsModule, //reactive forms (formControl and formBuilder)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

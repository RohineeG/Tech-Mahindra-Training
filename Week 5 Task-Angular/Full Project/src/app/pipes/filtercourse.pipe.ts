import { Pipe, PipeTransform } from '@angular/core';
import { course } from '../model/course';

@Pipe({
  name: 'filtercourse'
})
export class FiltercoursePipe implements PipeTransform {

  transform(courses: course[], selectedDomain: string): course[] {
    if (!selectedDomain || selectedDomain === 'All') {
      return courses; 
    }
    return courses.filter(course => course.domain === selectedDomain);
  }
}

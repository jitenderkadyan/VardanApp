import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../core/crud.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {
  
  allCourses: Array<any> = []

  constructor(public crud: CrudService) { }

  ngOnInit() {
    this.crud.read('courses').subscribe(ref => {
      this.allCourses = ref
    })
  }

}

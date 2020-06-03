import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../core/crud.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
})
export class ClassesPage implements OnInit {
  allClasses: Array<any> = []
  allTeachers: Array<any> = []

  constructor(public crud: CrudService) { }

  ngOnInit() {
    this.getClasses()
    this.crud.read('teachers').subscribe(ref => this.allTeachers = ref)
  }

  getClasses() {
    this.crud.read('classes').subscribe(ref => this.allClasses = ref)
  }

  filter(name) {
    if (name === 'all') {
      this.getClasses()
    } else {
      this.crud.filterRead('classes', 'teacher', name).subscribe(ref => this.allClasses = ref);
    }
  }

}

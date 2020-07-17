import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../core/crud.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../../modal/modal.page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
})
export class ClassesPage implements OnInit {
  allClasses: Observable<any>;
  allTeachers: Observable<any>;

  constructor(
    public crud: CrudService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.getClasses()
    this.allTeachers = this.crud.read('teachers')
  }

  getClasses() {
    this.allClasses = this.crud.read('classes')
  }

  filter(name) {
    if (name === 'all') {
      this.getClasses()
    } else {
      this.allClasses = this.crud.filterRead('classes', 'teacher', name)
    }
  }

  async presentModal(title,data) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        'title': title,
        'data': data
      },
      cssClass: 'my-custom-modal-class'
    });
    return await modal.present();
  }

}

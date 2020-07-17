import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../core/crud.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../../modal/modal.page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-text',
  templateUrl: './text.page.html',
  styleUrls: ['./text.page.scss'],
})
export class TextPage implements OnInit {
 
  allText: Observable<any>

  constructor(
    public crud: CrudService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.allText = this.crud.read('text')
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

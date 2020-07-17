import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../core/crud.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../../modal/modal.page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-murli',
  templateUrl: './murli.page.html',
  styleUrls: ['./murli.page.scss'],
})
export class MurliPage implements OnInit {
  allMurli: Observable<any>;

  constructor(
    public crud: CrudService,
    public modalController: ModalController
    ) { }

  ngOnInit() {
    this.allMurli = this.crud.read('murli')
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

import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../core/crud.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../../modal/modal.page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  latestMurli: Observable<any>;
  latestCommentary: Observable<any>;
  latestClass: Observable<any>;

  constructor(
    public crud: CrudService,
    public modalController: ModalController
    ) { }

  ngOnInit() {
    this.latestMurli = this.crud.latestRead('murli')
    this.latestCommentary = this.crud.latestRead('commentary')
    this.latestClass = this.crud.latestRead('classes')
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

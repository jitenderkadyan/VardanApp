import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../core/crud.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../../modal/modal.page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.page.html',
  styleUrls: ['./commentary.page.scss'],
})
export class CommentaryPage implements OnInit {

  allCommentary: Observable<any>

  constructor(
    public crud: CrudService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.allCommentary = this.crud.read('commentary')
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

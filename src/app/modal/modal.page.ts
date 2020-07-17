import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrudService } from '../core/crud.service';

@Component({
  selector: 'modal-page',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {

  @Input() title: string;
  @Input() data: any;

  constructor(public modalCtrl: ModalController, public crud: CrudService) { }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../core/crud.service';

@Component({
  selector: 'app-murli',
  templateUrl: './murli.page.html',
  styleUrls: ['./murli.page.scss'],
})
export class MurliPage implements OnInit {
  allMurli: Array<any> = []

  constructor(public crud: CrudService) { }

  ngOnInit() {
    this.crud.read('murli').subscribe(ref => {
      this.allMurli = ref
    })
  }

}

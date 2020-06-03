import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../core/crud.service';

interface LatestObj {
  embedLink: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  latestMurli: any = {
    embedLink: ''
  };
  latestCommentary: any = {
    embedLink: ''
  };

  constructor(public crud: CrudService) { }

  ngOnInit() {
    this.crud.latestRead('murli').subscribe(ref => this.latestMurli = ref[0])
    this.crud.latestRead('commentary').subscribe(ref => this.latestCommentary = ref[0])
  }

}

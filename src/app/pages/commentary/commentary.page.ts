import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../core/crud.service';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.page.html',
  styleUrls: ['./commentary.page.scss'],
})
export class CommentaryPage implements OnInit {

  allCommentary: Array<any> = []

  constructor(public crud: CrudService) { }

  ngOnInit() {
    this.crud.read('commentary').subscribe(ref => {
      this.allCommentary = ref
    })
  }

}

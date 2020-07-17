import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentaryPageRoutingModule } from './commentary-routing.module';

import { CommentaryPage } from './commentary.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CommentaryPageRoutingModule
  ],
  declarations: [CommentaryPage]
})
export class CommentaryPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MurliPageRoutingModule } from './murli-routing.module';

import { MurliPage } from './murli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MurliPageRoutingModule
  ],
  declarations: [MurliPage]
})
export class MurliPageModule {}

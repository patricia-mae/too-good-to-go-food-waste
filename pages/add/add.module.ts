import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPageRoutingModule } from './add-routing.module';

import { AddPage } from './add.page';
import { IonApp } from '@ionic/angular';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPageRoutingModule,
  ],
  declarations: [AddPage],

  bootstrap: [IonApp],
  entryComponents: [
    AddPage,
  ]
})
export class AddPageModule {}

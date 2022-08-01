import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  message = 'This modal example uses the modalController to present and dismiss modals.';

  constructor(private modalCtrl: ModalController) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalController,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = 'Hello, ${data}!';
    }
  }
}
import { Component, ViewChild,  } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
 
@Component({
  selector: 'app-add',
  templateUrl: 'add.page.html',
  styleUrls: ['add.page.scss'],
})
export class AddPage {
  @ViewChild(IonModal) modal: IonModal;
 
 
  product: string;
  quantity: string;
  date: string;
  branch: string;
 
  isModalOpen = false;
 
  setOpen(isOpen:boolean) {
    this.isModalOpen = isOpen;
  }
 
  myAction(){
    console.log("welcome")
  }
  products: string;
 
  cancel() {
    this.modal.dismiss(null, 'cancel1');
   
  }
 
  confirm() {
    this.modal.dismiss(this.product,'confirm1');
 
  }
 
onWillDismiss(event: Event) {
  const ev1 = event as CustomEvent<OverlayEventDetail<string>>;
 
  if (ev1.detail.role === 'confirm1') {
    this.product = `${ev1.detail.data}`;
  }
 
}
 
}

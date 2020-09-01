import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TestComponent } from '../../components/test/test.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private modalCtrl: ModalController
  ) {}


  async present() {
    const modal = await this.modalCtrl.create({
      component: TestComponent
    })

    await modal.present()

    console.log("presetn modatl")
  }
}

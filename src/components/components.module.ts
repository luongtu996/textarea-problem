import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    CommonModule,
     IonicModule,
  ],
  declarations: [
    TestComponent
  ],
  exports: [
    TestComponent
  ], 
})
export class ComponentsModule { }
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParamGetPage } from './param-get';

@NgModule({
  declarations: [
    ParamGetPage,
  ],
  imports: [
    IonicPageModule.forChild(ParamGetPage),
  ],
})
export class ParamGetPageModule {}

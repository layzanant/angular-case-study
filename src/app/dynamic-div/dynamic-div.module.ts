import { NgModule } from '@angular/core';
import { DynamicDivComponent } from './dynamic-div.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    DynamicDivComponent
  ],
  imports: [SharedModule],
  providers: [],
})
export class DynamicDivModule { }

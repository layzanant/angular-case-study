import { NgModule } from '@angular/core';
import { ECommerceComponent } from './e-commerce.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    ECommerceComponent,
  ],
  imports: [SharedModule],
  providers: [],
})
export class ECommerceModule { }

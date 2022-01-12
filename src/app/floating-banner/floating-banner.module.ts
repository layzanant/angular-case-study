import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { FloatingBannerComponent } from './floating-banner.component';

@NgModule({
  declarations: [
    FloatingBannerComponent,
  ],
  imports: [SharedModule],
  providers: [],
})
export class FloatingBannerModule { }

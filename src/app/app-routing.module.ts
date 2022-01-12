import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { FloatingBannerComponent } from './floating-banner/floating-banner.component';
import { ServiceTimerComponent } from './service-timer/service-timer.component';
import { SiblingTimerComponent } from './sibling-timer/sibling-timer.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';

const routes: Routes = [
  {
    path: 'floatingbanner',
    component: FloatingBannerComponent,
    loadChildren: () => import('./floating-banner/floating-banner.module').then(m => m.FloatingBannerModule)
  },
  {
    path: 'e-commerce',
    component: ECommerceComponent,
    loadChildren: () => import('./e-commerce/e-commerce.module').then(m => m.ECommerceModule)
  },
  {
    path: 'siblingtimer',
    component: SiblingTimerComponent,
    loadChildren: () => import('./sibling-timer/sibling-timer.module').then(m => m.SiblingTimerModule)
  },
  {
    path: 'servicetimer',
    component: ServiceTimerComponent,
    loadChildren: () => import('./service-timer/service-timer.module').then(m => m.ServiceTimerModule)
  },
  {
    path: 'studentmarks',
    component: StudentMarksComponent,
    loadChildren: () => import('./student-marks/student-marks.module').then(m => m.StudentMarksModule)
  },
  {
    path: 'dynamicdivs',
    component: DynamicDivComponent,
    loadChildren: () => import('./dynamic-div/dynamic-div.module').then(m => m.DynamicDivModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { StudentMarksComponent } from './student-marks.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    StudentMarksComponent
  ],
  imports: [SharedModule],
  providers: [],
})
export class StudentMarksModule { }

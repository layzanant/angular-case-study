import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.scss']
})
export class StudentMarksComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private readonly http: HttpClient) { }

  displayedColumns: string[] = ['name', 'class', 'section', 'subject1', 'subject2', 'subject3'];
  dataSource = new MatTableDataSource([]);
  keys: any = [];

  ngOnInit(): void {
    this.http.get('./assets/studentList.json').subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res);
      this.keys = Object.keys(res[0]);
      this.dataSource.sort = this.sort;
    }, () => { console.log('failed') });
  }

}

import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { MatDialog } from '@angular/material';
import { EditCourseComponent } from './edit-course/edit-course.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  openDialog() {
      this.dialog.open(EditCourseComponent, {
        data: { courseId:  1 }
      })
      .afterClosed()
      .subscribe(result => console.log(result));
  }
  progress = 0;
  timer;
  courses;
  isLoading = false;
  constructor(private dialog: MatDialog){
    this.isLoading = true;
    this.getCourses().subscribe(x => this.isLoading = false);
    this.timer = setInterval(() => {
        this.progress++;
        if(this.progress == 100) clearInterval();
    }, 20);
  }

  getCourses() {
      return timer(3000);
  }

  categories = [
    {name: 'Beginner'},
    {name: 'Intermediate'},
    {name: 'Advanced'},
  ];

  selectCategory(category) {
    this.categories
      .filter( c => c != category)
      .forEach( c=> c['selected'] = false);
    category.selected = !category.selected;
  }
  minDate = new Date(2017, 1, 1);
  maxDate = new Date(2017, 8, 1);
  
  title = 'material-demo';
  isChecked = true;

  colors = [
    { id: 1, name: "Red" },
    { id: 2, name: "Green" },
    { id: 3, name: "Blue" }
  ];

  color = 2;
  onChange($event) {
    console.log($event); 
  }
}

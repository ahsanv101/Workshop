import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  newTodoVal = '';
  TodoVal = '';
  name = 'Angular 6';
  constructor(private appService: AppService) {
  }

  changeBoxColor(color) {
    this.appService.$boxColorSubject.next(color);
  }

  change() {
    this.changeBoxColor(this.newTodoVal);
  }
  changeC() {
    this.changeCircleColor(this.TodoVal);
  }

  changeCircleColor(color) {
    this.appService.$circleColorSubject.next(color);
  }
}

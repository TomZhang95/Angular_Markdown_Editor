import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html?v=${new Date().getTime()}',
  styleUrls: ['./app.component.css?v=${new Date().getTime()}']
})
export class AppComponent {
  title = 'angular-blog';
}

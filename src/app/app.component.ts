import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pattern';

  onToggle(on: boolean) {
    console.log('toggle', on);
  }
}

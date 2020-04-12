import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fake-snap-message';

  /**
   * CSS hex colors
   */
  colorPrimaryPerson: string = '#F23C57';
  colorSecondaryPerson: string = '#0096E5';
}

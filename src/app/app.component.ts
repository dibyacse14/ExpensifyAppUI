import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public rightSidenav: any;
  title = 'expensify-app';
  mySideNavList: string[] = [];
  opened: boolean;

  shouldRun = true;
}

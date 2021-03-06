import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(public  appComponent:AppComponent) { }

  ngOnInit() {
  }

  toggleRightSideNav(){
    this.appComponent.rightSidenav.toggle();
  }
}

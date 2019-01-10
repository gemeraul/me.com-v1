import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  active = false;

  constructor() { }

  ngOnInit() {
  }

  activateMenu() {
    console.log('im activated')
    this.active = !this.active;
  }

}

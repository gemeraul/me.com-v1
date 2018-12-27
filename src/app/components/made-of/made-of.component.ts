import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-made-of',
  templateUrl: './made-of.component.html',
  styleUrls: ['./made-of.component.css']
})
export class MadeOfComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(page) {
    this.router.navigateByUrl('/' + page);
  }

}

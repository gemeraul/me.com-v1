import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CycleItemsService } from '../../services/cycle-items.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  today = new Date();
  greeting: string;
  love: string;

  constructor(private cycleItemsService: CycleItemsService, private router: Router) { 
    this.cycleItemsService.createCycleService()
      .subscribe(data => {
        this.love = data;
      });
  }

  ngOnInit() {
    const hours = this.today.getHours();
    if (hours <= 12) {
      this.greeting = 'Buenos días !';
    } else if (hours >= 18) {
      this.greeting = 'Buenas noches !';
    } else {
      this.greeting = 'Buenas tardes !';
    }
  }

  goTo(page) {
    this.router.navigateByUrl('/' + page);
  }

}

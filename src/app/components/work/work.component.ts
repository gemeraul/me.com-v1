import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

export interface Section {
  name: string;
  yearsExp: Date;
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  languages: Section[] = [
    {
      name: 'Javascript',
      yearsExp: new Date('1/1/15'),
    },
    {
      name: 'NodeJs',
      yearsExp: new Date('1/17/16'),
    },
    {
      name: 'HTML5 + CSS',
      yearsExp: new Date('1/28/14'),
    },
    {
      name: 'Typescript',
      yearsExp: new Date('1/28/16'),
    },
    {
      name: 'Python',
      yearsExp: new Date('1/28/15'),
    }
  ];
  tools: Section[] = [
    {
      name: 'Github',
      yearsExp: new Date('1/28/15'),
    },
    {
      name: 'Visual Studio Code',
      yearsExp: new Date('1/28/16'),
    },
    {
      name: 'Teamcity',
      yearsExp: new Date('1/28/16'),
    },
    {
      name: 'Firebase',
      yearsExp: new Date('1/28/18'),
    },
    {
      name: 'Rally',
      yearsExp: new Date('1/28/15'),
    }
  ];
  frameworks: Section[] = [
    {
      name: 'Angular',
      yearsExp: new Date('1/28/16'),
    },
    {
      name: 'Express.js',
      yearsExp: new Date('1/28/16'),
    },
    {
      name: 'Socket.io',
      yearsExp: new Date('1/28/17'),
    },
    {
      name: 'Jasmine + Karma',
      yearsExp: new Date('1/28/16'),
    },
    {
      name: 'Sails.js',
      yearsExp: new Date('1/28/16'),
    }
  ];
  resumeUrl: Observable<string | null>;

  constructor(private router: Router, private storage: AngularFireStorage) {
    const ref = this.storage.ref('RaulGrimaldiResumeENG2019.pdf');
    this.resumeUrl = ref.getDownloadURL();
  }

  ngOnInit() {
  }

  goTo(page) {
    this.router.navigateByUrl('/' + page);
  }

}

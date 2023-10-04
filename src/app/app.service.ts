import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(public router: Router, public title: Title) { }
  nav(a: string) {
    this.router.navigateByUrl(a);
  }
}

import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  loginWindow: boolean = false;
  user: user;
  constructor(public router: Router, public title: Title) { }
  isSign() {
    return !(this.user == undefined)
  }
  nav(a: string) {
    this.router.navigateByUrl(a);
  }
}
export interface user {
  id: string,
  email: string,
  name: string,
  picture: string,
}
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { x } from "./font"
@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.scss']
})
export class FontsComponent implements OnInit {
  sortField: string;
  selectEle: any;
  fonts: any[] = [];
  display: boolean = false;
  constructor(public app: AppService) { }
  ngOnInit(): void {
    this.app.title.setTitle("Al-bashir Fonts");
    this.fonts = x;
  }
}

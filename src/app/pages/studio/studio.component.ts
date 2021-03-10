import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})
export class StudioComponent implements OnInit {

  constructor(public app: AppService) { }

  ngOnInit(): void {
    this.app.title.setTitle("Al-Bashir Studio");
  }
  list(a: string = ""): boolean {
    return (this.app.router.url == `/Al-bashirStudio${a}`)
  }
}

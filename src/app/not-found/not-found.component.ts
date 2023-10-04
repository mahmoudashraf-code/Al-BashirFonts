import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  constructor(public app: AppService) { }
  back() {
    history.back()
  }
}

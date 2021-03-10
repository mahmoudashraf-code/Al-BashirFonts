import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { IMenuItem } from 'src/ui/common/list/list.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  data: IMenuItem[] = [
    {
      name: "Posts",
      command: () => {
        this.app.router.navigate(["blog", "posts"])
      }
    },
    {
      name: "Add Post",
      command: () => {
        this.app.router.navigate(["blog", "addPost"])
      }
    }
  ]
  constructor(public app: AppService) {
    this.app.title.setTitle("Al-Bashir Bloger")
  }
}

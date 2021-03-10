import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonMyModule } from 'src/ui/common/common.module';

@NgModule({
  declarations: [BlogComponent, PostsComponent, AddPostComponent],
  imports: [
    CommonModule,
    CommonMyModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: "",
        component: BlogComponent,
        children: [
          {
            path: "",
            redirectTo: "posts",
            pathMatch: "full"
          },
          {
            path: "posts",
            component: PostsComponent
          },
          {
            path: "addPost",
            component: AddPostComponent
          }
        ]
      }
    ])
  ]
})
export class BlogModule { }

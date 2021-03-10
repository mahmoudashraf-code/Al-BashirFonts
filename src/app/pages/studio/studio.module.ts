import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioComponent } from './studio.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InstallComponent } from './install/install.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [StudioComponent, HomeComponent, InstallComponent, BlogComponent, AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: StudioComponent,
        children: [
          {
            path: "",
            component: HomeComponent
          },
          {
            path: "install",
            component: InstallComponent
          },
          {
            path: "about",
            component: AboutComponent
          },
          {
            path: "blog",
            component: BlogComponent
          }
        ]
      }
    ])
  ]
})
export class StudioModule { }

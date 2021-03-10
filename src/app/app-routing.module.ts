import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "Al-bashirStudio",
    pathMatch: "full"
  },
  {
    path: "Al-bashirStudio",
    loadChildren: () => import("./pages/studio/studio.module").then(m => m.StudioModule)
  },
  {
    path: "Al-bashirFonts",
    loadChildren: () => import("./pages/fonts/fonts.module").then(m => m.FontsModule)
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "Al-BashirStudio",
    pathMatch: "full"
  },
  {
    path: "Al-BashirStudio",
    loadChildren: () => import("./pages/studio/studio.module").then(m => m.StudioModule)
  },
  {
    path: "Al-BashirFonts",
    loadChildren: () => import("./pages/fonts/fonts.module").then(m => m.FontsModule)
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

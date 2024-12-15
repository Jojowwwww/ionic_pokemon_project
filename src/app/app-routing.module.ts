import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "pokemon", pathMatch: "full" },
  { path: "pokemon", loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)},
  { path: "camera", loadChildren: () => import('./camera/camera.module').then(m => m.CameraPageModule)},
  { path: "about", loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
})

export class AppRoutingModule {}
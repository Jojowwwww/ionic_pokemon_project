import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPage } from './list.page';

const routes: Routes = [
  { path: "", component: ListPage, pathMatch: "full" },
  { path: "add", loadChildren: () => import('./add-pokemon/add-pokemon.module').then(m => m.AddPokemonPageModule) },
  { path: ":id", loadChildren: () => import('./detail-pokemon/detail-pokemon.module').then(m => m.DetailPokemonPageModule) },
  { path: "edit/:id", loadChildren: () => import('./edit-pokemon/edit-pokemon.module').then(m => m.EditPokemonPageModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPageRoutingModule {}
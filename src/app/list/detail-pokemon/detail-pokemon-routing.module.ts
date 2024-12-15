import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonPage } from './detail-pokemon.page';

const routes: Routes = [
    { path: "", component: DetailPokemonPage, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailPokemonPageRoutingModule {}
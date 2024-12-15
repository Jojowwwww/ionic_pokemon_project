import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPokemonPage } from './add-pokemon.page';

const routes: Routes = [
    { path: "", component: AddPokemonPage, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPokemonPageRoutingModule {}
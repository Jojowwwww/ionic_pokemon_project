import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPokemonPage } from './edit-pokemon.page';

const routes: Routes = [
    { path: "", component: EditPokemonPage, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPokemonPageRoutingModule {}
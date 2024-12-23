import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonFormPage } from './pokemon-form.page';

const routes: Routes = [
    { path: "", component: PokemonFormPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonFormPageRoutingModule {}
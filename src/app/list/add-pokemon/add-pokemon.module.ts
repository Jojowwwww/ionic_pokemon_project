import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AddPokemonPage } from './add-pokemon.page';
import { AddPokemonPageRoutingModule } from './add-pokemon-routing.module';
import { PokemonFormPageModule } from '../pokemonAssets/pokemon-form/pokemon-form.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddPokemonPage],
  imports: [
    CommonModule,
    IonicModule,
    AddPokemonPageRoutingModule,
    FormsModule,
    PokemonFormPageModule,
  ],
})
export class AddPokemonPageModule {}
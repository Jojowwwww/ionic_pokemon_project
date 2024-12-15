import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EditPokemonPage } from './edit-pokemon.page';
import { EditPokemonPageRoutingModule } from './edit-pokemon-routing.module';
import { PokemonFormPageModule } from '../pokemonAssets/pokemon-form/pokemon-form.module';
import { FormsModule } from '@angular/forms';
import { PokemonTypeColorModule } from '../pokemonAssets/pokemon-type-color.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    EditPokemonPageRoutingModule,
    FormsModule,
    PokemonFormPageModule,
    PokemonTypeColorModule
  ],
  declarations: [EditPokemonPage],
})
export class EditPokemonPageModule {}
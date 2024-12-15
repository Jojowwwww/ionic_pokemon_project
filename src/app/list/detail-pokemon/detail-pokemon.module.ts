import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DetailPokemonPage } from './detail-pokemon.page';
import { DetailPokemonPageRoutingModule } from './detail-pokemon-routing.module';
import { PokemonTypeColorModule } from '../pokemonAssets/pokemon-type-color.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DetailPokemonPageRoutingModule,
    PokemonTypeColorModule
  ],
  declarations: [DetailPokemonPage],
})
export class DetailPokemonPageModule {}
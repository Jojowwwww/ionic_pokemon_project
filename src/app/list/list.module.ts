import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListPageRoutingModule } from './list-routing.module';
import { ListPage } from './list.page';
import { PokemonTypeColorModule } from './pokemonAssets/pokemon-type-color.module';
import { PokemonFormPageRoutingModule } from './pokemonAssets/pokemon-form/pokemon-form-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule,
    PokemonTypeColorModule,
    PokemonFormPageRoutingModule
  ],
  declarations: [ListPage],
})
export class ListPageModule {}
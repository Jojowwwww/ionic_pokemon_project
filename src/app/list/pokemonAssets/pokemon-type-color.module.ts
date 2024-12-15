import { NgModule } from '@angular/core';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

@NgModule({
  declarations: [
    PokemonTypeColorPipe
  ],
  exports: [
    PokemonTypeColorPipe
  ]
})
export class PokemonTypeColorModule {}
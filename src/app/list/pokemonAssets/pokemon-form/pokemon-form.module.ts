import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PokemonFormPage } from './pokemon-form.page';
import { PokemonTypeColorModule } from '../pokemon-type-color.module';
import { PokemonFormPageRoutingModule } from './pokemon-form-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonTypeColorModule,
    PokemonFormPageRoutingModule,
  ],
  declarations: [PokemonFormPage],
  exports: [PokemonFormPage],
})
export class PokemonFormPageModule {}
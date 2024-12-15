import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemonAssets/pokemon';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.page.html'
})

export class AddPokemonPage implements OnInit{
  pokemon! : Pokemon;

  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }
}
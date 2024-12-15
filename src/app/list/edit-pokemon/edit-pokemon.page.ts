import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemonAssets/pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemonAssets/pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.page.html',
})

export class EditPokemonPage implements OnInit{
  pokemon: Pokemon|undefined;
  constructor(private route: ActivatedRoute, private pokemonService: PokemonService){}

  ngOnInit(): void {
    const pokemonId : string|null = this.route.snapshot.paramMap.get("id");
    if(pokemonId){
      this.pokemonService.getPokemonById(Number(pokemonId)).subscribe((pokemon) => this.pokemon = pokemon);
    }else {
      this.pokemon = undefined;
    }
  }
}

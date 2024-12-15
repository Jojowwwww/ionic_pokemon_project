import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemonAssets/pokemon';
import { Router } from '@angular/router';
import { PokemonService } from './pokemonAssets/pokemon.service';

@Component({
  selector: 'app-list-page',
  templateUrl: 'list.page.html',
  styleUrl: 'list.page.scss'
})

export class ListPage implements OnInit {
  pokemonList: Pokemon[] = [];

  constructor(private router: Router, private pokemonService: PokemonService){};

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe((pokemonList) => this.pokemonList = pokemonList);
  }
  
  goToPokemon(pokemon : Pokemon){
    this.router.navigate(['/pokemon/' + pokemon.id]);
  }
  
  goToAddPokemon(){
    this.router.navigate(['/pokemon/add']);
  }
}

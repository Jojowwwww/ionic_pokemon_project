import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemonAssets/pokemon';
import { PokemonService } from '../pokemonAssets/pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.page.html',
})

export class DetailPokemonPage implements OnInit {
  pokemonList: Pokemon[] = [];
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService){  }

  ngOnInit(){
    this.pokemonService.getPokemonList().subscribe((pokemonList) => this.pokemonList = pokemonList);

    const pokemonId : string|null = this.route.snapshot.paramMap.get("id");
    if(pokemonId){
      this.pokemonService.getPokemonById(Number(pokemonId)).subscribe((pokemon) => this.pokemon = pokemon);
    }
  }

  goToPokemonsList(){
    this.router.navigate(['pokemon']);
  }

  goToEditPokemon(pokemon: Pokemon){
    this.router.navigate(['pokemon/edit/' + pokemon.id]);
  }

  deletePokemon(pokemon: Pokemon){
    this.pokemonService.deletePokemon(pokemon.id).subscribe(() => this.goToPokemonsList());
  }
}

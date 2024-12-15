import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.page.html',
  styleUrls: ['./pokemon-form.page.scss'],
})

export class PokemonFormPage implements OnInit {
  @Input() pokemon! : Pokemon;
  @Input() isAddForm: boolean = false;
  types: string[] = [];
  
  constructor(private pokemonService: PokemonService, private router: Router){ }
  
  ngOnInit(): void {
   this.types = this.pokemonService.getPokemonTypeList();
   this.isAddForm = this.router.url.includes("add");
  }

  hasType(type: string): boolean{ // méthode permettant de savoir si le pokémon possède déjà le type sélectionné et donc cocher/décocher certains types
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string){ // méthode pour ajouter et supprimer les types d'un pokémon
    const isChecked = ($event.target as HTMLInputElement).checked;

    if(isChecked){
      this.pokemon.types.push(type);
    }else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypesValid(type: string): boolean{
    if(this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    }
    if(this.pokemon.types.length > 2 && !this.hasType(type)){
      return false;
    }

    return true;
  }

  onSubmit(){
    if(this.isAddForm){
      this.pokemonService.addPokemon(this.pokemon).subscribe(() => window.document.location.href = "/pokemon"); // l'id vient du serveur quand on ajoute un nouveau pokémon
    }else {
      this.pokemonService.updatePokemon(this.pokemon).subscribe(() => window.document.location.href = "/pokemon");
    }
  }
}

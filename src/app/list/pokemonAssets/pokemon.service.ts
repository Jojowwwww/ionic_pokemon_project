import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {

  private types: string[] = [""];

  constructor(private http: HttpClient){
    this.http.get<string[]>(`https://pokemon.projetu.fr/pokemon/types`).subscribe( 
      (response) => {this.types = response},
      (error) => {this.types = ["error"]}
    );
    
  }

  getPokemonList(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>('https://pokemon.projetu.fr/pokemon').pipe(
      // tap((response) => this.log(response)), // appel à la fonction log pour éviter la répetition de code
      catchError((error) => this.handleError(error, [])) // tap -> équivalent à un console.log mais adapter à des observables
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined>{
    return this.http.get<Pokemon>(`https://pokemon.projetu.fr/pokemon/${pokemonId}`).pipe(
      // tap((response) => this.log(response)), // appel à la fonction log pour éviter la répetition de code
      catchError((error) => this.handleError(error, [])) // tap -> équivalent à un console.log mais adapter à des observables
    );
  }

  searchPokemonList(term: string): Observable<Pokemon[]>{
    if(term.length <= 1){
      return of([]);
    }

    return this.http.get<Pokemon[]>(`https://pokemon.projetu.fr/pokemon/search/${term}`).pipe(
      // tap((response) => this.log(response)), // appel à la fonction log pour éviter la répetition de code
      catchError((error) => this.handleError(error, [])) // tap -> équivalent à un console.log mais adapter à des observables
    )
  } 

  updatePokemon(pokemon: Pokemon): Observable<null>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put('https://pokemon.projetu.fr/pokemon/push/'+pokemon.id, pokemon, httpOptions).pipe(
      // tap((response) => this.log(response)), // appel à la fonction log pour éviter la répetition de code
      catchError((error) => this.handleError(error, [])) // tap -> équivalent à un console.log mais adapter à des observables
    );
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Pokemon>('https://pokemon.projetu.fr/pokemon/add/', pokemon, httpOptions).pipe(
      // tap((response) => this.log(response)), // appel à la fonction log pour éviter la répetition de code
      catchError((error) => this.handleError(error, [])) // tap -> équivalent à un console.log mais adapter à des observables
    );
  }

  deletePokemon(pokemonId: number): Observable<null>{
    return this.http.delete(`https://pokemon.projetu.fr/pokemon/delete/${pokemonId}`).pipe(
      // tap((response) => this.log(response)), // appel à la fonction log pour éviter la répetition de code
      catchError((error) => this.handleError(error, [])) // tap -> équivalent à un console.log mais adapter à des observables
    );
  }

  private log(response: any){
    console.table(response);
  }

  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }

  getPokemonTypeList(): string[]{ //Observable<string[]>
    return this.types;
    //return ["Plante", "Eau", "Feu", "Vol", "Insecte", "Normal", "Electrik", "Poison", "Fée", "Combat", "Psy"];
  }
}
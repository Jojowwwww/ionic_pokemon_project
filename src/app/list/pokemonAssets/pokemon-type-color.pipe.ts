import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor',
})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {
    let color: string;

    switch (type) {
      case 'Feu':
        color = '#FF7043';
        break;
      case 'Eau':
        color = '#42A5F5';
        break;
      case 'Plante':
        color = '#66BB6A';
        break;
      case 'Insecte':
        color = '#8D6E63';
        break;
      case 'Normal':
        color = '#E0E0E0';
        break;
      case 'Vol':
        color = '#90CAF9';
        break;
      case 'Poison':
        color = '#B39DDB';
        break;
      case 'Fée':
        color = '#F8BBD0';
        break;
      case 'Psy':
        color = '#673AB7';
        break;
      case 'Electrik':
        color = '#D4E157';
        break;
      case 'Combat':
        color = '#FF5722';
        break;
      default:
        color = '#BDBDBD';
        break;
    }

    return color;
  }
}
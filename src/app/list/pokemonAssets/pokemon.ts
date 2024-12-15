export class Pokemon {
    id!: number;
    hp!: number;
    cp!: number;
    name!: string;
    picture!: string;
    types!: Array<string>;
    created!: Date;

    constructor(hp: number = 100, cp: number = 10, name: string = "Entrez un nom",  picture: string = 'https://raw.githubusercontent.com/HybridShivam/Pokemon/refs/heads/master/assets/imagesHQ/xxx.png', types: string[] = ['Normal'], created: Date = new Date()){
        this.hp = hp;
        this.cp = cp;
        this.name = name;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }
}
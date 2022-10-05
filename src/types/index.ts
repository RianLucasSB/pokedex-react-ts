export type TPokemon = {
  name: string;
  types?: PokemonType[];
  height?: number;
  weigth?: number;
  sprites?: {
    back_default: string;
    front_default: string;
  };
};

export type TGetAllPokemonResponse = {
  count: number;
  next: string;
  previous: string;
  results: PokemonResponse[];
};

export type PokemonResponse = {
  name: string;
  url: string;
}

type PokemonType = {
  slot: number;
  type: {
    name: string;
  };
};

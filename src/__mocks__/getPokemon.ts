import { ApiDetail } from "../fetchers/getPokemon";

export const mockGetPokemon: ApiDetail = {
    abilities: [
      {
        ability: {
          name: 'overgrow',
          url: 'https://pokeapi.co/api/v2/ability/1/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'chlorophyll',
          url: 'https://pokeapi.co/api/v2/ability/2/',
        },
        is_hidden: false,
        slot: 2,
      },
    ],
    base_experience: 64,
    cries: {
      latest: 'https://pokeapi.co/api/v2/cries/latest/',
      legacy: 'https://pokeapi.co/api/v2/cries/legacy/',
    },
    forms: [
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon-form/1/',
      },
    ],
    game_indices: [
      {
        game_index: 1,
        version: {
          name: 'red',
          url: 'https://pokeapi.co/api/v2/version/1/',
        },
      },
    ],
    height: 7,
    held_items: [],
    id: 1,
    is_default: true,
    location_area_encounters: 'https://pokeapi.co/api/v2/location-area/1/',
    moves: [
      {
        move: {
          name: 'tackle',
          url: 'https://pokeapi.co/api/v2/move/1/',
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: 'level-up',
              url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            },
            version_group: {
              name: 'red-blue',
              url: 'https://pokeapi.co/api/v2/version-group/1/',
            },
          },
        ],
      },
    ],
    name: 'bulbasaur',
    order: 1,
    past_abilities: [],
    past_types: [],
    species: {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
    },
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/dream-world/1.png',
          front_female: null,
        },
        home: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/home/1.png',
          front_female: null,
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/home/shiny/1.png',
          front_shiny_female: null,
        },
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/official-artwork/1.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/official-artwork/shiny/1.png',
        },
        showdown: {
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/showdown/back/1.png',
          back_female: null,
          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/showdown/back/shiny/1.png',
          back_shiny_female: null,
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/showdown/front/1.png',
          front_female: null,
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/showdown/front/shiny/1.png',
          front_shiny_female: null,
        },
      },
    },
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/2/',
        },
      },
    ],
    weight: 69,
  };
  
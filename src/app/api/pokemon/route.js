import { NextResponse } from 'next/server';

const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon';

const translations = {
  en: {
    types: "Types",
    abilities: "Abilities",
    height: "Height",
    weight: "Weight",
    stats: "Stats",
    hp: 'HP',
    attack: 'Attack',
    defense: 'Defense',
    'special-attack': 'Sp. Atk',
    'special-defense': 'Sp. Def',
    speed: 'Speed',
    close: "Close"
  },
  ja: {
    types: "タイプ",
    abilities: "特性",
    height: "身長",
    weight: "体重",
    stats: "能力値",
    hp: 'HP',
    attack: '攻撃',
    defense: '防御',
    'special-attack': '特攻',
    'special-defense': '特防',
    speed: 'スピード',
    close: "閉じる"
  },
  'zh-Hans': {
    types: "属性",
    abilities: "特性",
    height: "身高",
    weight: "体重",
    stats: "能力值",
    hp: '生命值',
    attack: '攻击',
    defense: '防御',
    'special-attack': '特殊攻击',
    'special-defense': '特殊防御',
    speed: '速度',
    close: "关闭"
  },
  'zh-Hant': {
    types: "屬性",
    abilities: "特性",
    height: "身高",
    weight: "體重",
    stats: "能力值",
    hp: '生命值',
    attack: '攻擊',
    defense: '防禦',
    'special-attack': '特殊攻擊',
    'special-defense': '特殊防禦',
    speed: '速度',
    close: "關閉"
  }
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') || '';
  const generation = searchParams.get('generation') || '';
  const habitat = searchParams.get('habitat') || '';
  const count = parseInt(searchParams.get('count') || '4', 10);
  const search = searchParams.get('search') || '';
  const lang = searchParams.get('lang') || 'en';

  const translate = (key) => translations[lang]?.[key] || translations.en[key] || key;

  try {
    // Fetch all Pokemon
    const response = await fetch(`${POKEMON_API}?limit=1000`);
    const data = await response.json();
    let pokemons = data.results;

    // Apply filters
    if (type || generation || habitat || search) {
      const filterPromises = [];
      if (type) {
        filterPromises.push(fetch(`https://pokeapi.co/api/v2/type/${type}`).then(res => res.json()));
      }
      if (generation) {
        filterPromises.push(fetch(`https://pokeapi.co/api/v2/generation/${generation}`).then(res => res.json()));
      }
      if (habitat) {
        filterPromises.push(fetch(`https://pokeapi.co/api/v2/pokemon-habitat/${habitat}`).then(res => res.json()));
      }

      const filterResults = await Promise.all(filterPromises);

      filterResults.forEach(result => {
        if (result.pokemon) {
          const pokemonNames = result.pokemon.map(p => p.pokemon ? p.pokemon.name : p.name);
          pokemons = pokemons.filter(p => pokemonNames.includes(p.name));
        }
      });

      if (search) {
        pokemons = pokemons.filter(p => p.name.includes(search.toLowerCase()));
      }
    }

    // Randomly select Pokemon
    const selectedPokemons = [];
    for (let i = 0; i < count && pokemons.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * pokemons.length);
      const pokemon = pokemons.splice(randomIndex, 1)[0];
      const detailResponse = await fetch(pokemon.url);
      const detailData = await detailResponse.json();

      // Fetch species data for localized names
      const speciesResponse = await fetch(detailData.species.url);
      const speciesData = await speciesResponse.json();
      const localizedName = speciesData.names.find(name => name.language.name === lang)?.name || detailData.name;

      // Fetch localized type names
      const typePromises = detailData.types.map(async t => {
        const typeResponse = await fetch(t.type.url);
        const typeData = await typeResponse.json();
        return typeData.names.find(name => name.language.name === lang)?.name || t.type.name;
      });
      const localizedTypes = await Promise.all(typePromises);

      // Fetch localized ability names
      const abilityPromises = detailData.abilities.map(async a => {
        const abilityResponse = await fetch(a.ability.url);
        const abilityData = await abilityResponse.json();
        return abilityData.names.find(name => name.language.name === lang)?.name || a.ability.name;
      });
      const localizedAbilities = await Promise.all(abilityPromises);

      const translatedStats = Object.fromEntries(
        detailData.stats.map(s => [
          translate(s.stat.name),
          s.base_stat
        ])
      );

      selectedPokemons.push({
        id: detailData.id,
        name: localizedName,
        image: detailData.sprites.front_default,
        types: localizedTypes.join(', '),
        height: detailData.height,
        weight: detailData.weight,
        abilities: localizedAbilities,
        stats: translatedStats,
        translations: {
          types: translate('types'),
          abilities: translate('abilities'),
          height: translate('height'),
          weight: translate('weight'),
          stats: translate('stats'),
          close: translate('close')
        }
      });
    }

    return NextResponse.json(selectedPokemons);
  } catch (error) {
    console.error('Error in Pokemon API:', error);
    return NextResponse.json({ error: 'Failed to fetch Pokemon' }, { status: 500 });
  }
}
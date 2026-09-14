async function getPokemon(signal) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=16", {
    signal,
  });
  const data = await response.json();
  const results = data.results;

  const pokemon = Promise.all(
    results.map(async (result) => {
      const response = await fetch(result.url, { signal });
      const data = await response.json();
      return {
        id: data.id,
        name: data.name,
        imageUrl: data.sprites.front_default,
      };
    }),
  );

  return pokemon;
}

export default getPokemon;

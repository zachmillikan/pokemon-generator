$.get({
  url: 'http://pokeapi.co/api/v2/pokemon/1',
  success: function(pokemon) {
    console.log(pokemon);
    console.log(pokemon.name);
    console.log(pokemon.id);
    console.log(pokemon.abilities);
    $('#pokemon_list').append(pokemon.name);
  }
});

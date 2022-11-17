/*Requisição HTTP por fetch, promises
Passo 1: Busco uma resposta com o método Fetch ('')
Passo 2: obtenho uma resposta e retorno uma promise usando o método return response.json( )
Passo 3: encadeio um segundo .then usando os dados que a primeira função está retornando.

fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
        console.log('Response', response)
        return response.json()
    })
    .then(pokemon => console.log(pokemon))
    .catch(error => console.log(error))
*/


const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
          <span class="number">#001</span>
          <span class="name">${pokemon.name}</span>
          <div class="detail">
            <ol class="types">
              <li class="type">grass</li>
              <li class="type">poison</li>
            </ol>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
              alt="${pokemon.name}"
            />
          </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

fetch(url)
    .then(response => response.json())
    .then(jsonBody => jsonBody.results)
    .then(pokemons => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)

        }
    })
    .catch(error => console.log(error))





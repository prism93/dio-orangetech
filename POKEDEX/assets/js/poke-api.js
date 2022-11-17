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



const PokeApi = {}

PokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then(response => response.json())
        .then(jsonBody => jsonBody.results)
        .catch(error => console.log(error))

}
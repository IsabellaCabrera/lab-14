
const container = document.getElementById("main-container");

async function getCharacters() {
    
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        const charactersData = data.results; 
        var characters = charactersData.map(parseJsonToCharacter);
        renderAllCharacters(characters);
}

function parseJsonToCharacter(element) {
    const character = new Character(
        element.name,
        element.image,
        element.status,
        element.species,
        element.location.name
    );
    return character;
}

function renderAllCharacters(characters) {
    characters.forEach(character => {
        container.innerHTML += character.toHtml()
    })
}

getCharacters();
const URL_API = "http://localhost:8000/character"

// READ  METHOD:    (GET)
async function getAllCharacter() {
    const response = await fetch(URL_API, {
        method: 'GET',
        headers: {
            
        "content-type": "aplication/json",
        },
    })
    const data = await response.json()
    return data 
}
const listTag = document.getElementById("characterList")

async function printCharacter (){
    const characters = await getAllCharacter()
    characters.map((character) => {
        listTag.innerHTML += `<li>
        <p>${character.name}</p>
        <p>${character.id}</p>
        <p>${character.house}</p>
        <p>${character.age}</p>
        <button onclick "deletecharacter(${character.id})">Delete</button>
        <li/>`
    })
}
printCharacter()


// DELETE METHOD:     (DELETE)
async function deleteCharacter(id) {
        const response = await fetch(URL_API + `/${id}` , {
            method: 'DELETE',
            headers: {"content-type": "aplication/json",},
        })
        const deletedCharacter = await response.json()
        console.log(deleteCharacter)
        return deletedCharacter
}

// CREATE METHOD:    (POST)
async function createCharacter() {

}
//UPDATE METHOD:(PUT)
async function updateCharacter() {

}



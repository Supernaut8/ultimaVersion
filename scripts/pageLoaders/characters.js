import { getCharacter, getCharacters, getEpisodeWithLink } from "./services/getData.js";


const listCharacters = async (page = 1) => {

const displayContainer = document.querySelector("main");
displayContainer.textContent= "";

const cardsCharacter = document.createElement("section");
cardsCharacter.setAttribute("class", "characters-container")
displayContainer.appendChild(cardsCharacter);

const display = document.querySelector(".characters-container");
// console.log(cardsCharacter)
// console.log(display)

    try {
        const { results } = await getCharacters(page);
        let lastEpisode;
        display.textContent = "";
        await results.forEach(async character => {
            const article = document.createElement('article');
            lastEpisode = character.episode[character.episode.length - 1]
            let episodeName = await getEpisodeInfo(lastEpisode);


            article.setAttribute('class', 'characters');
            article.innerHTML = `

            
                <div class="characters-item">
                    <div class="tarjeta">
                       <img src="${character.image}" class="img-fluid" alt="imagen de: ${character.name}">
                        <div class="description">
                            <p class="name">${character.name}</p>
                            <p>${character.status}</p>
                            <p>Last known location:</p>
                            <p>${character.location.name}</p>
                            <p>Last seen in the episode</p>
                            <p>${episodeName}</p>
                        </div>
                    </div>
                    <div class="container-btnCompare">
                        <button class="btnCompare" type="button" data-url="${character.url}" id="${character.id}">
                            Compare Characters
                        </button>
                    </div>
                </div>
           

            `



            display.appendChild(article);

            // const compareButton = document.getElementById(`boton-${character.id}`)        
            // compareButton.addEventListener("click", async (e) => {
            //     let characterCoin = e.target.dataset.url;
            //     // const results = await getCharacter(characterCoin);
            //     // results.textContent = "";
            //     // characterList(results.characters, episode.id)
            //     // console.log(results)
            // })    

        });
    } catch (error) {
        console.log("Error:" + error);
    }

}



async function getEpisodeInfo(lastEpisode) {
    let res;
    // console.log(lastEpisode)
    res = await getEpisodeWithLink(lastEpisode);
    console.log(res.name);
    return res.name;
}

export { listCharacters };
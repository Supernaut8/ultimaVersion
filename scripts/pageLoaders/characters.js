import { getCharacters, getEpisodeWithFullLink } from "./services/getData.js";

const display = document.querySelector("main");





const listCharacters = async(page = 1) => {

    try {
        const { results } = await getCharacters(page);
        let lastEpisode;
        display.textContent = "";
        await results.forEach(async character => {
            const article = document.createElement('article');
            lastEpisode = character.episode[character.episode.length - 1]
            let episodeName = await getEpisodeInfo(lastEpisode);

            article.setAttribute('class', 'character');
            article.innerHTML = `

            <div class="grid-item">
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
                    <button class="btnCompare" id="${character.id}">
                        Compare Characters
                    </button>
                </div>
            </div>   

            `







            display.appendChild(article);
        });
    } catch (error) {
        console.log("Error:" + error);
    }

}



async function getEpisodeInfo(lastEpisode) {
    let res;
    // console.log(lastEpisode)
    res = await getEpisodeWithFullLink(lastEpisode);
    console.log(res.name);
    return res.name;
}

export { listCharacters };
import { listCharacters } from "./pageLoaders/characters.js";
import { listEpisodes } from "./pageLoaders/episodes.js";
const charactersButton = document.querySelector(".load-characters");
const episodesButton = document.querySelector(".load-episodes");

charactersButton.addEventListener("click", (e) => {
    listCharacters()
})
episodesButton.addEventListener("click", (e) => {
    listEpisodes()
})
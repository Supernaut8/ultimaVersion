import { characterList } from "./pageLoaders/characters.js";
const button = document.querySelector(".load-characters");

button.addEventListener("click", (e) => {

    characterList()

})
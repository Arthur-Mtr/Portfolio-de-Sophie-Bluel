import { recupererTravaux, } from "./api.js";
import { recupererCategories, } from "./api.js";

import { affichageTravaux, afficherCategories, } from "./gallery.js";


const travaux = await recupererTravaux();
const categories = await recupererCategories();

afficherCategories(categories);
affichageTravaux(travaux);


const boutons = document.querySelectorAll("button");

for(let i = 0; i < boutons.length; i++) {
    boutons[i].addEventListener("click", function() {
        const travauxFiltres = travaux.filter(function(x) {
            return `${x.categoryId}` === boutons[i].dataset.id;
        })
        affichageTravaux(travauxFiltres);
    })
}

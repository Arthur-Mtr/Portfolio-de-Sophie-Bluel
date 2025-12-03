import { recupererTravaux, } from "./api.js";
import { recupererCategories, } from "./api.js";

import { affichageTravaux, afficherCategories, } from "./gallery.js";


const travaux = await recupererTravaux();
const categories = await recupererCategories();

afficherCategories(categories);
affichageTravaux(travaux);


const boutons = document.querySelectorAll("button");


for (const bouton of boutons) {
    bouton.addEventListener("click", function() {

        for(const b of boutons) {
            b.classList.remove("active")
        }
        bouton.classList.add("active")

        if (bouton.dataset.id === "Tous") {
            affichageTravaux(travaux);
        } 
        else {
        const travauxFiltres = travaux.filter(function(x) {
            return `${x.categoryId}` === bouton.dataset.id;
        })
        affichageTravaux(travauxFiltres);
        }
    })
}
import { recupererTravaux, } from "./api.js";
import { recupererCategories, } from "./api.js";

import { affichageTravaux, afficherCategories, affichageModeEdition, afficherModal, fermerModal, affichageTravauxModal, activerPoubelles, } from "./fonctions.js";


const travaux = await recupererTravaux();
const categories = await recupererCategories();
const token = localStorage.getItem("token");

afficherCategories(categories);
affichageTravaux(travaux);


// Ici on gère les Filtres dynamiquement
const boutons = document.querySelectorAll(".btn-filtres");


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
//      //

if(token) {
    affichageModeEdition();
}

// Editer la Modal1 //

const btnModifier = document.querySelector(".modif");
const modal1 = document.querySelector(".modal1");
const btnClose = document.querySelectorAll(".bouton-close");
const overlay = document.querySelectorAll(".modal-overlay");


btnModifier.addEventListener("click", function() {
    afficherModal(modal1);
    affichageTravauxModal(travaux);
    activerPoubelles();
});

btnClose.forEach(function(btn) {
btn.addEventListener("click", function() {
    fermerModal(modal1);
    fermerModal(modal2);
    });
})

overlay.forEach(function(overlay) {
overlay.addEventListener("click", function() {
    fermerModal(modal1);
    fermerModal(modal2);
    });
})


// MODAL 2 //

const btnModal2 = document.querySelector(".ajout-photo");
const modal2 = document.querySelector(".modal2");
const back = document.querySelector(".bouton-back");

btnModal2.addEventListener("click", function() {
    fermerModal(modal1);
    afficherModal(modal2);
})

back.addEventListener("click", function() {
    fermerModal(modal2);
    afficherModal(modal1);
})

//        //

console.log(token)
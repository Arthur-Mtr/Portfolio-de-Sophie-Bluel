// Ici on fera toutes nos FONCTIONS

//Fonction pour afficher les Travaux de l'Architecte

export function affichageTravaux(travaux) {
    const gallery = document.querySelector(".gallery")

    gallery.innerHTML = ""

    for(let i = 0; i < travaux.length; i++) {
        const figure = document.createElement("figure")

        const img = document.createElement("img")
        img.src = travaux[i].imageUrl
        const figcaption = document.createElement("figcaption")
        figcaption.textContent = travaux[i].title

        gallery.appendChild(figure)
        figure.appendChild(img)
        figure.appendChild(figcaption)
    }
}

// Fonction pour afficher les Filtres/Catégories de l'architecte

export function afficherCategories(categories) {
    const portfolio = document.getElementById("portfolio");

    const filtresDiv = document.createElement("div");
        filtresDiv.classList.add("filtres");

    const h2 = document.querySelector("#portfolio h2");
    h2.insertAdjacentElement("afterend", filtresDiv);

    const buttonTous = document.createElement("button");
    buttonTous.classList.add("btn-filtres")
    buttonTous.textContent = "Tous"
    buttonTous.dataset.id = "Tous"
    buttonTous.classList.add("active")
        filtresDiv.appendChild(buttonTous);

    for(let i = 0; i < categories.length; i++) {
        const button = document.createElement("button");
        button.classList.add("btn-filtres")
        button.textContent = categories[i].name;
        button.dataset.id = categories[i].id;

        filtresDiv.appendChild(button);
    }
}

// Fonction pour afficher le MODE EDITION

export function affichageModeEdition() {
   const bandeau = document.querySelector(".bandeau-noir");
   const filtres = document.querySelector(".filtres"); 
   const titreProjet = document.getElementById("titre-projet");
   const modif = document.querySelector(".modif");
   const login = document.querySelector(".log");

   bandeau.style.display = "flex";
   filtres.style.display = "none";
   titreProjet.classList.add("mode-edition-titre");
   modif.style.display = "flex";
   login.textContent = "logout";
   login.href = "#"

   login.addEventListener("click", function() {
    localStorage.removeItem("token");
    window.location.href = "index.html";
   })
}

// On crée une fonction pour l'affichage des travaux dans la MODAL //

export function affichageTravauxModal(travaux) {
    const gallery = document.querySelector(".photo-travaux")

    gallery.innerHTML = ""

    for(let i = 0; i < travaux.length; i++) {
        const figure = document.createElement("figure")
        figure.classList.add("figure-modal")

        const img = document.createElement("img")
        img.src = travaux[i].imageUrl
       
        const iconeSupprimer = document.createElement("button")
        iconeSupprimer.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
        
        iconeSupprimer.classList.add("icone-supprimer")
        
        gallery.appendChild(figure)
        figure.appendChild(img)
        figure.appendChild(iconeSupprimer)
    }
}

// Afficher et Fermer la Modal //

export function afficherModal(x){
    x.style.display = "flex";
    x.setAttribute("aria-hidden", "false")
}

export function fermerModal(x) {
    x.style.display = "none";
    x.setAttribute("aria-hidden", "true");
}
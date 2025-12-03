// Ici on fait les fonctions en lien avec la galerie

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
    buttonTous.textContent = "Tous"
    buttonTous.dataset.id = "Tous"
    buttonTous.classList.add("active")
        filtresDiv.appendChild(buttonTous);

    for(let i = 0; i < categories.length; i++) {
        const button = document.createElement("button");
        button.textContent = categories[i].name;
        button.dataset.id = categories[i].id;

        filtresDiv.appendChild(button);
    }
}

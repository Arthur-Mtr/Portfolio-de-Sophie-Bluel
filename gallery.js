// ici on fait la fonction pour créer les travaux de l'architecte dynamiquement.

export function affichageTravaux(travaux) {
    const gallery = document.querySelector(".gallery")

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
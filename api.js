// On fait les fonctions qui récupérent les éléments via l'API.

 export async function recupererTravaux() {
    const reponse = await fetch("http://localhost:5678/api/works");
    const travaux = await reponse.json();
    return travaux
}
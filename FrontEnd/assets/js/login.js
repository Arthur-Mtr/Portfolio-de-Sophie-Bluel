
const form = document.querySelector(".form-log");
const email = document.getElementById("e-mail");
const mdp = document.getElementById("mdp");
const messageErreur = document.querySelector(".message-erreur");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const valeurEmail = email.value;
    const valeurMdp = mdp.value;

    const reponse = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            email: valeurEmail,
            password: valeurMdp
        })
    });
    const validationApi = await reponse.json();
    
    if(reponse.ok === true) {
        localStorage.setItem("token", validationApi.token);
        window.location.href = "index.html";
    }else{
        messageErreur.style.display = "block"
    }
});


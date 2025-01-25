document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".timeline-button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");
            const description = document.getElementById(targetId);

            // Basculer la classe 'active' pour afficher ou cacher la description
            description.classList.toggle("active");
        });
    });
});


const form = document.getElementById('contact-form');

// Validation des champs avant soumission
form.addEventListener('submit', (e) => {
    // Récupération des champs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Récupération des éléments d'erreur
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    // Réinitialisation des messages d'erreur
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';

    let isValid = true;

    // Validation du champ Nom
    if (!name) {
        nameError.textContent = 'Veuillez entrer votre nom.';
        nameError.style.display = 'block';
        isValid = false;
    }

    // Validation du champ Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        emailError.textContent = 'Veuillez entrer votre email.';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Veuillez entrer une adresse email valide.';
        emailError.style.display = 'block';
        isValid = false;
    }

    // Validation du champ Message
    if (!message) {
        messageError.textContent = 'Veuillez entrer votre message.';
        messageError.style.display = 'block';
        isValid = false;
    }

    // Bloque la soumission si le formulaire est invalide
    if (!isValid) {
        e.preventDefault();
    }

    // Réinitialisation des champs après soumission
    setTimeout(() => {
        form.reset(); // Vide les champs après l'envoi
    }, 100); // Délai pour permettre l'envoi
});

// Réinitialisation des champs lors du chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    form.reset(); // Vide les champs dès le chargement
});

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const menuContent = document.querySelector(".menu-content");

    // Affiche ou masque le menu au clic sur ☰
    menuButton.addEventListener("click", () => {
        menuContent.classList.toggle("active");
    });

    // Ferme le menu si l'utilisateur clique ailleurs
    document.addEventListener("click", (event) => {
        if (!menuContent.contains(event.target) && event.target !== menuButton) {
            menuContent.classList.remove("active");
        }
    });
});


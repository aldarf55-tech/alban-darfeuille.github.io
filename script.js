const cards = document.querySelectorAll('.card');
const closeBtn = document.getElementById('close-btn');

cards.forEach(card => {
    // On récupère la couleur définie dans l'attribut data-color
    const color = card.getAttribute('data-color');
    // On applique cette couleur comme variable CSS pour l'effet de lueur
    card.style.setProperty('--glow-color', color);

    card.addEventListener('click', () => {
        // Ajout de la classe active pour le plein écran
        card.classList.add('active');
        // Empêche le défilement du fond
        document.body.style.overflow = 'hidden';
        // Affiche le bouton retour
        closeBtn.style.display = 'block';
    });
});

// Retour à la grille initiale
closeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Évite de redéclencher le clic sur la carte
    cards.forEach(card => card.classList.remove('active'));
    document.body.style.overflow = 'auto';
    closeBtn.style.display = 'none';
});

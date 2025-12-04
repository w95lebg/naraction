document.addEventListener('DOMContentLoaded', () => {
    const langOptions = document.querySelectorAll('.lang-option');

    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Retirer la classe active de tous les options
            langOptions.forEach(opt => opt.classList.remove('active-lang'));

            // Ajouter la classe active à l'option cliquée
            this.classList.add('active-lang');

            // Vous pouvez ajouter ici la logique pour changer la langue du site
            const selectedLang = this.getAttribute('data-lang');
            console.log("Langue sélectionnée : " + selectedLang);

            // NOTE: Pour un vrai changement de langue, vous auriez besoin d'une librairie
            // de traduction (comme i18next) ou d'une logique côté serveur.
        });
    });
});
// read_file.js
const fs = require('fs');

// Lire le contenu de welcome.txt et l'afficher
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erreur de lecture du fichier:', err);
        return;
    }
    console.log('Contenu du fichier welcome.txt:', data);
});

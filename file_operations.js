// file_operations.js
const fs = require('fs');

// Créer un fichier welcome.txt avec le contenu "Hello Node"
fs.writeFileSync('welcome.txt', 'Hello Node\n');
console.log('Le fichier welcome.txt a été créé avec succès.');

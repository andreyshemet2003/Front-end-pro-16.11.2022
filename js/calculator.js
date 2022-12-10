let alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789',
    key = '';
for(let i = 0; i < 16; i++){
    key += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
}
console.log(key);
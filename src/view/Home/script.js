const form = document.getElementById('form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let fone = document.getElementById('fone').value;

    console.log(nome, email, fone);
})
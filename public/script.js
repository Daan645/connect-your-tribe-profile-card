let repoButton = document.getElementById('repo-button');
let repoList = document.querySelector('.repo');
let repoUl = document.querySelector('.repo-ul');
let repoEmoji = document.querySelector('.repo-emoji');

repoButton.addEventListener('click', function() {
    // Voeg de klasse met een vertraging van 1 seconde toe
    setTimeout(function() {
        repoList.classList.add('repo-grow');
    }, 2200);

    setTimeout(function() {
        repoEmoji.classList.add('repo-emoji-appear');
    }, 2000);

    setTimeout(function() {
        repoEmoji.innerHTML ='❌';
    }, 2500);
});

repoButton.addEventListener('click', function() {
    // Voeg de klasse met een vertraging van 1 seconde toe
    setTimeout(function() {
        repoUl.classList.add('repo-ul-move');
    }, 3300);
});

repoButton.addEventListener('click', repoButtonAnimation);


// Voeg de repoButtonAnimation-functie toe aan een event listener (bijvoorbeeld een click event)
;

function repoButtonAnimation() {
    repoButton.classList.toggle('repo-button-move'); // De naam van de klasse moet overeenkomen met de CSS-animatiedefinitie
}

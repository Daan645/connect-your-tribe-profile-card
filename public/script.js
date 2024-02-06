let repoButton = document.getElementById('repo-button');
let repoList = document.querySelector('.repo');
let repoUl = document.querySelector('.repo-ul');
let repoEmoji = document.querySelector('.repo-emoji');
let repoCheck = false;

repoButton.addEventListener('click', function() {
    if (repoCheck === false) {

        repoCheck = true;
        repoButton.classList.toggle('repo-button-move');
        setTimeout(function() {
            repoList.classList.toggle('repo-grow');
        }, 2200);
        setTimeout(function() {
            repoEmoji.classList.toggle('repo-emoji-appear');
        }, 2000);
        setTimeout(function() {
            repoEmoji.innerHTML = '❌';
        }, 2500);
        setTimeout(function() {
            repoUl.classList.toggle('repo-ul-move');
        }, 2850);
        console.log(repoCheck);

    } else {

        repoUl.classList.toggle('repo-ul-move-reverse');


        setTimeout(function() {
            repoButton.classList.toggle('repo-button-move-reverse');
        }, 1000); // Verlaagde vertragingstijd om consistentie te behouden met de eerste animaties
        setTimeout(function() {
            repoEmoji.classList.toggle('repo-emoji-appear-reverse');
        }, 2500);
        setTimeout(function() {
            repoList.classList.toggle('repo-grow-reverse');

        }, 1000);
        setTimeout(function() {
            repoEmoji.innerHTML = '⌨️';
        }, 3000);
        repoCheck = false;
        console.log(repoCheck);
    }
});





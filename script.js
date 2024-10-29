
    document.addEventListener('DOMContentLoaded', function() {
        const curseur = document.querySelector('.curseur-personnalise');

        document.addEventListener('mousemove', (e) => {
            curseur.style.top = e.pageY + 'px';
            curseur.style.left = e.pageX + 'px';
        });
    });


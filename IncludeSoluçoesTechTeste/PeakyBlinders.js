var typed = new Typed('.txt', {
    strings:["Uma Empresa familia Shelby "], typeSpeed:45,
});



document.addEventListener("DOMContentLoaded", function(){
    const links = document.querySelectorAll('.Alink');

    links.forEach(link => {
        link.addEventListener('click', function(e){
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetContent = document.getElementById(targetId);
            if(targetContent){
                targetContent.scrollIntoView({behavior: 'smooth'});
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function(){
    const linksPerso = document.querySelectorAll('.linkPersona');

    links.forEach(link => {
        link.addEventListener('click', function(e){
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetContent = document.getElementById(targetId);
            if(targetContent){
                targetContent.scrollIntoView({behavior: 'smooth'});
            }
        });
    });
});
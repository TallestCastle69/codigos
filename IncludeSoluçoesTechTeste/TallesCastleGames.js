document.querySelector('.setaMenu').addEventListener('click', function(){
    const menu = document.querySelector('.menu');
    const setaMenu = document.querySelector('.setaMenu')
    
    

    if(menu.style.display === 'flex') {
        menu.style.display = 'none';
        setaMenu.style.background = 'none';
        divPs.style.display = 'none';

        
    }else{
        menu.style.display = 'flex';

    }

})
const setaMenu = document.querySelector('.setaMenu')


setaMenu.addEventListener('mouseover', function(){
    setaMenu.style.background = "white";
    
})

setaMenu.addEventListener('mouseout',function(){
    setaMenu.style.background = '';
   
})

  /*if(menu.style.display === 'none'){
        setaMenu.addEventListener('mouseover', function(){
           
        })
    
        
        })
    }*/

        const divPs = document.querySelector('.divPs')

document.querySelector('.btnPs').addEventListener('click', function(){
    


    if(divPs.style.display === 'none' || divPs.style.display === ''){
        divPs.style.display = 'block'
    }
    else{
        divPs.style.display = 'none';
    }
})


let currentIndex = 0;

//---------------------------------------------- Carousel

const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.querySelector('.next').addEventListener('click', () => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].classList.add('active');
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    items[currentIndex].classList.add('active');
    updateCarousel();
});

function updateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    const width = carouselInner.clientWidth;
    carouselInner.style.transform = `translateX(-${currentIndex * width}px)`;
}

window.addEventListener('resize', updateCarousel);

//------------------------------------------------------------



document.querySelector('.nextCard').addEventListener('click', function(){
    const card = document.getElementById('card');
    let leftPosition = 0;
    let topPosition = 0;
    leftPosition += 10;
    topPosition += 10;
    card.style.left = leftPosition + 'px';
    card.style.top = topPosition + 'px';
})
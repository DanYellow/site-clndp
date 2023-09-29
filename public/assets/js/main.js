(()=>{
    function togglePause() {
        var myPlayer = videojs("my-video");
        if (myPlayer.paused()) {
            myPlayer.play();
        }
        else {
            myPlayer.pause();
        }
    }
    
    document.getElementById("my-video").addEventListener("click", togglePause);

//slider
const swiper = new Swiper("#swiper1", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



$(function () {
    $('[data-fancybox]').fancybox({
        iframe : {
            css : {
                width : '600px',
                height : '400px'
            }
        }
    });
});


  

//slider mag


  const swiper2 = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30, /* l'espace entre les images dans le swiper */
    slidesPerView: 'auto', /* pour ajuster automatiquement le nombre d'images à afficher */
  });
  
console.log('Done');


})();


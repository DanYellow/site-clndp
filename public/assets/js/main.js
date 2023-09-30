$(function () {
  $("[data-fancybox]").fancybox({
    iframe: {
      css: {
        width: "600px",
        height: "400px",
      },
    },
  });

  const myPlayer = videojs("my-video");
  function togglePause() {
    if (myPlayer.paused()) {
      myPlayer.play();
    } else {
      myPlayer.pause();
    }
  }

  document.getElementById("my-video").addEventListener("click", togglePause);

  const sidenav = document.querySelector("[data-sidenav]");
  const burgerOpenBtn = document.querySelector("[data-burger-open-btn]");
  const burgerCloseBtn = document.querySelector("[data-burger-close-btn]");

  burgerOpenBtn.addEventListener("click", () => {
    sidenav.classList.add("active")
    document.body.classList.add("sidemenu-opened")
  })
  
  burgerCloseBtn.addEventListener("click", () => {
    sidenav.classList.remove("active")
    document.body.classList.remove("sidemenu-opened")
  })
});

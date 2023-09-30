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
  const sidenavMenuContent = document.querySelector("[data-sidenav-core]");

  const burgerOpenBtn = document.querySelector("[data-burger-open-btn]");
  const burgerCloseBtn = document.querySelector("[data-burger-close-btn]");
  const submenuTriggerBtn = document.querySelectorAll("[data-submenu-root]");
  const submenuSidenav = document.querySelector("[data-sidenav-submenu]");

  burgerOpenBtn.addEventListener("click", () => {
    sidenav.classList.add("active")
    document.body.classList.add("sidemenu-opened")
  })
  
  burgerCloseBtn.addEventListener("click", () => {
    sidenav.classList.remove("active")
    // sidenavMenuContent.classList.remove("hide")
    document.body.classList.remove("sidemenu-opened")
  })

  submenuTriggerBtn.forEach(element => {
    element.addEventListener("click", (e) => {
      const submenuData = e.target.dataset.submenuRoot;
      const submenuTitle = e.target.textContent
      const submenuLevel = Number(e.target.dataset.submenuLevel);

      sidenavMenuContent.style.transform = `translateX(-${submenuLevel * 100}%)`;
      console.log(sidenavMenuContent)
      submenuSidenav.querySelector("h1").textContent = submenuTitle
    })
  });
});

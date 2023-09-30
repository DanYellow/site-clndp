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
  const burgerReturnBtn = document.querySelector("[data-burger-return-btn]");
  const submenuTriggerBtn = document.querySelectorAll("[data-submenu-root]");
  const submenuSidenav = document.querySelector("[data-sidenav-submenu]");

  const submenuPanelTpl = document.querySelector("[data-template-id=submenu-panel]");
  const submenuPanelButton = document.querySelector("[data-template-id=submenu-button]");
  const submenuPanelLink = document.querySelector("[data-template-id=submenu-link]");
  let currentSubMenuLevel = 1

  burgerOpenBtn.addEventListener("click", () => {
    sidenav.classList.add("active");
    document.body.classList.add("sidemenu-opened");
  });

  burgerCloseBtn.addEventListener("click", () => {
    sidenav.classList.remove("active");
    // sidenavMenuContent.classList.remove("hide")
    document.body.classList.remove("sidemenu-opened");
  });

  burgerReturnBtn.addEventListener("click", () => {
    currentSubMenuLevel--
    sidenavMenuContent.style.transform = `translateX(-${currentSubMenuLevel * 100}%)`;
  });

  const generateSubmenuPanel = (e) => {
    const submenuDataRaw = e.target.dataset.submenuRoot;
      const submenuData = JSON.parse(submenuDataRaw)
      const submenuTitle = e.target.textContent;
      const submenuLevel = Number(e.target.dataset.submenuLevel);

      sidenavMenuContent.style.transform = `translateX(-${
        currentSubMenuLevel * 100
      }%)`;

      console.log(submenuData);
      submenuSidenav.querySelector("[data-title]").textContent = submenuTitle;
      
      submenuData.forEach((item) => {
        const li = document.createElement("li");
        let tpl = submenuPanelLink.content.cloneNode(true)

        if ("sub_menu" in item) {
          tpl = submenuPanelButton.content.cloneNode(true)
          const button = tpl.querySelector("button")
          var text = document.createTextNode(item.name);
          button.prepend(text);
          button.dataset.submenuRoot = JSON.stringify(item.sub_menu)
          button.addEventListener("click", generateSubmenuPanel);
        } else {
          const link = tpl.querySelector("a")
          link.textContent = item.name
          link.setAttribute('href', item.link);
        }

        // submenuPanelButton
        // const button = document.createElement("button");
        // button.textContent = item.name

        li.appendChild(tpl);
        submenuSidenav.querySelector("[data-list-items]").appendChild(li);
      })

      currentSubMenuLevel++
  }

  submenuTriggerBtn.forEach((element) => {
    element.addEventListener("click", generateSubmenuPanel);
  });
});

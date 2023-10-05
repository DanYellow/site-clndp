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
});

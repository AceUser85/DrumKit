function hit(hit) {
  hit.pause();
  hit.currentTime = 0;
  hit.play();

  }

document.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "Numpad1":
      hit(hi_hat);
      document.getElementsByClassName("key")[6].style.backgroundColor = "#08f";
      setTimeout(() => document.getElementsByClassName("key")[6].style.backgroundColor = null, 100);
      break;
    case "Numpad2":
      hit(snare);
      document.getElementsByClassName("key")[7].style.backgroundColor = "#08f";
      setTimeout(() => document.getElementsByClassName("key")[7].style.backgroundColor = null, 100);
      break;
    case "Numpad3":
      hit(kick);
      document.getElementsByClassName("key")[8].style.backgroundColor = "#08f";
      setTimeout(() => document.getElementsByClassName("key")[8].style.backgroundColor = null, 100);
      break;
    case "Numpad4":
      hit(hi_tom);
      document.getElementsByClassName("key")[3].style.backgroundColor = "#08f";
      setTimeout(() => document.getElementsByClassName("key")[3].style.backgroundColor = null, 100);
      break;
    case "Numpad5":
      hit(mid_tom);
      document.getElementsByClassName("key")[4].style.backgroundColor = "#08f";
      setTimeout(() => document.getElementsByClassName("key")[4].style.backgroundColor = null, 100);
      break;
    case "Numpad6":
      hit(floor_tom);
      document.getElementsByClassName("key")[5].style.backgroundColor = "#08f";
      setTimeout(() => document.getElementsByClassName("key")[5].style.backgroundColor = null, 100);
      break;
    case "Numpad7":
      document.getElementsByClassName("key")[0].style.backgroundColor = "#08f";
      setTimeout(() => document.getElementsByClassName("key")[0].style.backgroundColor = null, 100);
      hit(crash);
      break;
    case "Numpad8":
      hit(china);
      document.getElementsByClassName("key")[1].style.backgroundColor = "#08f";
      setTimeout(() => document.getElementsByClassName("key")[1].style.backgroundColor = null, 100);
      break;
    case "Numpad9":
      hit(ride);
      document.getElementsByClassName("key")[2].style.backgroundColor = "#08f";
      setTimeout(() => document.getElementsByClassName("key")[2].style.backgroundColor = null, 100);
      break;
  }
});

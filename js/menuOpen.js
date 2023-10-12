function menuFunction() {
    var x = document.getElementById("downloads");
    const rolling = document.querySelector(".stop-scrolling");
    const ActiveHamb = document.querySelectorAll(".hamburguer-icon__bar");
    if (x.className.includes('menu-in')) {
      x.classList.add('menu-out');
      x.classList.remove('menu-in');
      rolling.style.overflowY = "auto";
      document.getElementById('hamb-phone').src="img/hamb.svg";
      for (const box of ActiveHamb) {
        box.classList.remove('hamburguer-icon__active');
      }      
    } else {
      x.classList.add('menu-in');
      x.classList.remove('menu-out');
      document.getElementById('hamb-phone').src="img/cross.svg";
      for (const box of ActiveHamb) {
        box.classList.add('hamburguer-icon__active');
      }
      rolling.style.overflowY = "hidden";
    }
  }


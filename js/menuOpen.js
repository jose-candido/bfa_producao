function menuFunction() {
    var x = document.getElementById("menu-div");
    const rolling = document.querySelector(".stop-scrolling");
    if (x.className.includes('menu-in')) {
      x.classList.add('menu-out');
      x.classList.remove('menu-in');
      rolling.style.overflowY = "auto";  
    } else {
      x.classList.add('menu-in');
      x.classList.remove('menu-out');
      rolling.style.overflowY = "hidden";
    }
  }


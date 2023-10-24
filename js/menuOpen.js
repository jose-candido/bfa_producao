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


  window.addEventListener("scroll", function() {
    var landingPage = document.querySelector(".section_1");
    var minhaDivFixa = document.querySelector(".section_10-arrow");
    var minhaDivFixa2 = document.querySelector(".arrow-desktop");
  
    if (landingPage && window.scrollY < landingPage.offsetHeight) {
      minhaDivFixa.style.display = "none";
      minhaDivFixa2.style.opacity = "0";
    } else {
      minhaDivFixa.style.display = "block";
      minhaDivFixa2.style.opacity = "1";
    }
  });

  window.addEventListener("scroll", function() {
    var landingPageM = document.getElementById("home_");
    var minhaDivFixaM = document.querySelector(".section_10-arrow_phone");
  
    if (landingPageM && window.scrollY < landingPageM.offsetHeight) {
      minhaDivFixaM.style.display = "none";
    } else {
      minhaDivFixaM.style.display = "block";
      minhaDivFixaM.style.opacity = "1";
    }
  });





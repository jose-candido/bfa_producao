const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");
  // const arrowTitle = document.querySelector(".seccao4Up__title");
  // const arrowIcon = document.querySelector(".seccao4Up__icon");
  // const arrowDownTitle = document.querySelector(".seccao4Down__title");
  // const arrowDownIcon = document.querySelector(".seccao4Down__icon");
  const arrLeft = document.querySelector(".arr-left");
  const arrRight = document.querySelector(".arr-right");
  const arrowAnimation = document.querySelector(".arr-right");


  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    if (slide === 0) {
      arrLeft.style.display = "none";
    } else {
      arrLeft.style.display = "flex";
      arrowAnimation.classList.remove("shake-arrow"); 
    }

    if (slide === 5) {
      arrRight.style.display = "none";
    } else arrRight.style.display = "flex";

    if (slide === 0 || slide === 1 || slide === 3 || slide === 5) {
      document.getElementById('arr-left').src="img/esquerda.svg";
      document.getElementById('arr-right').src="img/direito.svg";
      document.getElementById('anterior').src="img/anterior.svg";
      document.getElementById('proximo').src="img/proximo.svg";
    }
  
    if (slide === 2) {
      document.getElementById('arr-left').src="img/esquerda-blue.svg";
      document.getElementById('arr-right').src="img/direita-blue.svg";
      document.getElementById('anterior').src="img/anterior-blue.svg";
      document.getElementById('proximo').src="img/proximo-blue.svg";
    }

    if (slide === 4) {
      document.getElementById('arr-left').src="img/esquerda-blue.svg";
      document.getElementById('arr-right').src="img/direito.svg";
      document.getElementById('anterior').src="img/anterior.svg";
      document.getElementById('proximo').src="img/proximo.svg";
    }

    slides.forEach(
      (s, i) => {
        var x = i - slide;
        if (x === 0) {
          s.classList.add("slideBeingShown");
        } else {
          s.classList.remove("slideBeingShown");
        }
        return s.style.transform = `translateX(${100 * x}%)`
      }
    );
  };

  const cleanBarAnimatedClass = function () {
    document.querySelectorAll('.section--4').forEach((e) => {
      e.querySelectorAll('.bar-entry').forEach((e) => {
        e.classList.remove('bar-animated');
      })
    });

    [1, 2, 3, 4, 5, 6].forEach((e) => {
      document.querySelectorAll(`.section--4-${e}`).forEach((e) => {
        e.querySelectorAll('.bar-entry').forEach((e) => {
          e.classList.remove('bar-animated');
        })
      });
    });
  }

  const cleanBlockFadeRightClass = function () {
    document.querySelectorAll('.section--4').forEach((e) => {
      e.querySelectorAll('.colaboradores__text').forEach((e) => {
        e.classList.remove('block-fade-right');
      });

      e.querySelectorAll('.container__left--4-4').forEach((e) => {
        e.classList.remove('block-fade-right');
      });

      e.querySelectorAll('.container__left--4-4-mobile').forEach((e) => {
        e.classList.remove('block-fade-right');
      });
    });

    [1, 2, 3, 4, 5, 6].forEach((e) => {
      document.querySelectorAll(`.section--4-${e}`).forEach((e) => {
        e.querySelectorAll('.colaboradores__text').forEach((e) => {
          e.classList.remove('block-fade-right');
        });
  
        e.querySelectorAll('.container__left--4-4').forEach((e) => {
          e.classList.remove('block-fade-right');
        });

        e.querySelectorAll('.container__left--4-4-mobile').forEach((e) => {
          e.classList.remove('block-fade-right');
        });  
      });
    });
  }

  const cleanGrowClass = function () {
    document.querySelectorAll('.section--4').forEach((e) => {
      e.querySelectorAll('.pie-graph').forEach((e) => {
        e.classList.remove('block-grow');
      });
    });

    [1, 2, 3, 4, 5, 6].forEach((e) => {
      document.querySelectorAll(`.section--4-${e}`).forEach((e) => {
        e.querySelectorAll('.pie-graph').forEach((e) => {
          e.classList.remove('block-grow');
        });
      });
    });
  }

  const triggerAnimation = function () {
    cleanBarAnimatedClass();
    cleanBlockFadeRightClass();
    cleanGrowClass();
    
    if (curSlide) {
      document.querySelectorAll(`.section--4-${curSlide}`).forEach((e) => {
        e.querySelectorAll('.bar-entry').forEach((e) => {
          e.classList.add('bar-animated');
        });
        e.querySelectorAll('.colaboradores__text').forEach((e) => {
          e.classList.add('block-fade-right');
        });
        e.querySelectorAll('.container__left--4-4').forEach((e) => {
          e.classList.add('block-fade-right');
        });
        e.querySelectorAll('.container__left--4-4-mobile').forEach((e) => {
          e.classList.add('block-fade-right');
        });      
        e.querySelectorAll('.block-animated').forEach((e) => {
          e.classList.add('block-fade-right');
        });      
        e.querySelectorAll('.pie-graph').forEach((e) => {
          e.classList.add('block-grow');
        });
      });
    }
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
    triggerAnimation();
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
    triggerAnimation();
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};






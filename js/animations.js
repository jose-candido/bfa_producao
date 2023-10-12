function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)

  );
}

function activateAnimationForBars(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    element.closest('.slide') &&
    element.closest('.slide').className.includes('slideBeingShown')
  );
}

function addRemoveBlueClass(element) {
  if (isInViewport(element)) {
    element.classList.add('blue');
  } else {
    element.classList.remove('blue');
  }
}

function addRemoveBarAnimatedClass(element) {
  if (isInViewport(element)) {
    element.classList.add('bar-animated-mobile');
  } else {
    element.classList.remove('bar-animated-mobile');
  }
}

const charts = document.querySelectorAll('.circular-chart');
const bars = document.querySelectorAll('.bar-entry');

document.addEventListener('scroll', function () {
  charts.forEach(addRemoveBlueClass);
  bars.forEach(addRemoveBarAnimatedClass);

  bars.forEach((e) => {
    if (activateAnimationForBars(e)) {
      e.classList.add('bar-animated');
    } else {
      e.classList.remove('bar-animated');
    }
  });
}, {
  passive: true
});

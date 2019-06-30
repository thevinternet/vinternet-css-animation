"use strict";

// Vinternet Animated Logo Controller

(() => {

  // Store core HTML elements used for file uploader
  const domElements = {
    controlButton: document.getElementById('toggleAnimation'),
    restartButton: document.getElementById('restartAnimation'),
    logoContainer: document.getElementById('vinternetLogo'),
    pathElements: [].slice.call(document.querySelectorAll('[data-play-state]')),
    pathAnimations: []
  }

  // Populate array for SVG animation classes
  domElements.pathElements.forEach((element) => {
    domElements.pathAnimations.push(element.getAttribute('class'));
  });

  // Add event listener to play/pause button
  domElements.controlButton.addEventListener('click', () => {
    domElements.pathElements.forEach((element) => {
      // Start or stop the animation depending on data-play-state attribute value
      if (element.getAttribute('data-play-state') == 'off') {
        element.setAttribute('data-play-state', 'on');
        domElements.controlButton.innerText = 'Pause';
      } else {
        element.setAttribute('data-play-state', 'off');
        domElements.controlButton.innerText = 'Play';
      }
    });
  })

  // Add event listener to restart button and remove classes from SVG path elements
  domElements.restartButton.addEventListener('click', () => {
    domElements.pathElements.forEach((element) => {
      element.setAttribute('class', '');
    });

    // Call void on the logo container to reset the element (and its' children)
    void domElements.logoContainer.offsetWidth;

    // Add back each relevant animation class to it's SVG path element and
    // reinitialise data-play-state attribute value to restart animation
    domElements.pathElements.forEach((element, index) => {
      element.setAttribute('class', domElements.pathAnimations[index]);
      element.setAttribute('data-play-state', 'on');
      domElements.controlButton.innerText = 'Pause';
    });
  })

})();

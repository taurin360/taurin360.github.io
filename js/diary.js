'use strict';

{ 
  document.querySelector('.next-page').addEventListener('click', () => {

    const targetNode = document.querySelectorAll('li');
    const nextButton = document.querySelector('.next-page');
    const beforeButton = document.querySelector('.before-page');
    let nextIndex = 0;

    for (let i = 0; i < 5; i++) {
      if (targetNode[i].classList.contains('onDisplay') === true) {
        targetNode[i].className = 'displayNon';
        nextIndex = i;
        if (i === 0) {
          beforeButton.classList.remove('displayNon');
          beforeButton.classList.add('onDisplay');
        }
        if (i >= 3) {
          nextButton.classList.remove('onDisplay');
          nextButton.classList.add('displayNon');
        }
        break;
      }
    }

    targetNode[nextIndex + 1].className = 'onDisplay';
  });

  document.querySelector('.before-page').addEventListener('click', () => {

    const targetNode = document.querySelectorAll('li');
    const nextButton = document.querySelector('.next-page');
    const beforeButton = document.querySelector('.before-page');
    let beforeIndex = 0;

    for (let i = 0; i < 5; i++) {
      if (targetNode[i].classList.contains('onDisplay') === true) {
        targetNode[i].classList = 'displayNon';
        beforeIndex = i;
        if (i === 4) {
          nextButton.classList.remove('displayNon');
          nextButton.classList.add('onDisplay');
        }
        if (i <= 1) {
          beforeButton.classList.remove('onDisplay');
          beforeButton.classList.add('displayNon');
        }
      }
    }

    targetNode[beforeIndex - 1].className = 'onDisplay';

  });

}


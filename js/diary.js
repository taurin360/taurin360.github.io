'use strict';

{ 
  document.querySelector('.next-page').addEventListener('click', () => {

    const targetNode = document.querySelectorAll('li');
    const nextButton = document.querySelector('.next-page');
    const beforeButton = document.querySelector('.before-page');

    console.log('次ページ押下');

    for (let i = 0; i < 5; i++) {
      if (targetNode[i].classList.contains('onDisplay') === true) {
        targetNode[i].classList.remove('onDisplay');
        targetNode[i].classList.add('displayNon');

        targetNode[1].classList.remove('displayNon');
        targetNode[1].classList.add('onDisplay');

        if (i >= 0) {
          nextButton.classList.remove('onDisplay');
          nextButton.classList.add('displayNon');
          beforeButton.classList.remove('displayNon');
          beforeButton.classList.add('onDisplay');

        }
      }
    }
  });

  document.querySelector('.before-page').addEventListener('click', () => {

    const targetNode = document.querySelectorAll('li');
    const nextButton = document.querySelector('.next-page');
    const beforeButton = document.querySelector('.before-page');

    console.log('前ページ押下');

    for (let i = 0; i < 5; i++) {
      if (targetNode[i].classList.contains('onDisplay') === true) {
        targetNode[i].classList.remove('onDisplay');
        targetNode[i].classList.add('displayNon');

        targetNode[0].classList.remove('displayNon');
        targetNode[0].classList.add('onDisplay');

        if (i <= 1) {
          beforeButton.classList.remove('onDisplay');
          beforeButton.classList.add('displayNon');
          nextButton.classList.remove('displayNon');
          nextButton.classList.add('onDisplay');
        }
      }
    }
  });


}


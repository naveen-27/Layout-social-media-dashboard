const slide  = document.querySelector('#dot'),
      toggle = document.querySelector('#theme-toggle'),
      theme  = document.querySelector('#theme-style'),
      text   = document.querySelector('.theme > h4');

toggle.addEventListener('click', () => {
    slide.style.transform = (slide.style.transform === 'translateX(0%)') 
                             ? 'translateX(100%)' : 'translateX(0%)';

    let color = theme.attributes.href.nodeValue;
    theme.attributes.href.nodeValue = (color === './light.css') ? './dark.css' : './light.css';

    text.innerText = (text.innerText === 'Light Mode' ? 'Dark Mode' : 'Light Mode');
});
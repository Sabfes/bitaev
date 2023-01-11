const light = document.querySelector('.header__image')
const appWrap = document.querySelector('.container')

light.addEventListener('click', () => {
  if (appWrap.style.background === 'black') {
    appWrap.style.background = 'white'
    light.style.opacity = '1'
  } else {
    appWrap.style.background = 'black'
    light.style.opacity = '.2'
  }
})
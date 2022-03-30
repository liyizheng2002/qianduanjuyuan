const baseSize = 100
const baseWidth = 414
const setHtmlFontSize = () => {
  const windowWidth = window.innerWidth
  document.querySelector('html').style.fontSize = windowWidth / baseWidth * baseSize + 'px'
}
setHtmlFontSize()
window.addEventListener('resize', setHtmlFontSize)

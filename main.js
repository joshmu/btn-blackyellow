const anchor = document.getElementsByTagName('a')[0]

const hoverIn = () => {
  console.log('in')
  document.body.classList.add('bgDark')
}
const hoverOut = () => {
  console.log('out')
  document.body.classList.remove('bgDark')
}

anchor.addEventListener('mouseenter', hoverIn)
anchor.addEventListener('mouseleave', hoverOut)

// //////// RAISIN //////// //
const raisinLinks = [...document.querySelectorAll('.raisin-link')]
const searchInput = document.querySelector('.pp-search-input')

function truncateLinkName() {
  const raisinContainerWidth = document.querySelector('raisin').offsetWidth
  let maxLength = 0

  switch (true) {
    case (raisinContainerWidth >= 120 && raisinContainerWidth <= 123):
      maxLength = 10
      break
    case (raisinContainerWidth >= 124 && raisinContainerWidth <= 131):
      maxLength = 11
      break
    case (raisinContainerWidth >= 132 && raisinContainerWidth <= 135):
      maxLength = 12
      break
    case (raisinContainerWidth >= 136):
      maxLength = 13
      break
    default:
      maxLength = 10
  }

  raisinLinks.forEach(link => {
    if (link.innerHTML.length > maxLength) {
      link.innerHTML = `${link.innerHTML.replace(/\.[^/.]+$/, '').slice(0, Math.max(0, maxLength))}...`
    }
  })
}

raisinLinks.forEach(link => {
  link.addEventListener('mouseover', event => {
    event.preventDefault()
    if (searchInput) {
      searchInput.placeholder = link.hostname
    }
  })
})

export default truncateLinkName

// //////// CLOCK //////// //

const clockContainer = document.querySelector('pp-clock-inner')

function displayTime() {
  const date = new Date()
  const d = date.toLocaleDateString(process.env.CLOCK_LOCALE, {weekday: 'short'}).toUpperCase()
  const h = date.getHours()
  const m = date.getMinutes()
  const s = date.getSeconds()

  const hour = h < 10 ? `0${h}` : h
  const minute = m < 10 ? `0${m}` : m
  const second = s < 10 ? `0${s}` : s

  document.querySelector('.pp-clock-time').innerHTML = `${d} : ${hour} : ${minute} : ${second}`

  setTimeout(displayTime, 1000)
}

function displayDate() {
  const today = new Date()
  const options = {year: 'numeric', month: 'short', day: 'numeric'}

  document.querySelector('.pp-clock-date').innerHTML = today.toLocaleDateString(process.env.CLOCK_LOCALE, options)
}

function toggleClockDisplay() {
  clockContainer.classList.toggle('is-flipped')
}

export {clockContainer, toggleClockDisplay, displayTime, displayDate}

const openPopUp = document.getElementById('open_pop_up')
const closePopUp = document.getElementById('pop_up_close')
const popUp = document.getElementById('pop_up')

openPopUp.addEventListener('click', function (e) {
  console.log('klick')
  e.preventDefault()
  popUp.classList.add('active')
})

closePopUp.addEventListener('click', () => {
  console.log('close')
  popUp.classList.remove('active')
})

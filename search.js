document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.dropdown')
  const contents = document.querySelectorAll('.dropdown-content')
  const searchInput = document.getElementById('searchInput')
  const line = document.querySelectorAll('.dropdown__line')
  const images = document.querySelectorAll('.dropdown__line img')

  const initialContentDisplay = {}
  contents.forEach(function (content) {
    initialContentDisplay[content.id] = content.style.display
  })

  contents.forEach(function (content) {
    content.style.display = 'none'
  })

  buttons.forEach(function (button, index) {
    button.addEventListener('click', function () {
      contents.forEach(function (content, contentIndex) {
        if (index === contentIndex) {
          content.style.display =
            content.style.display === 'none' ? 'block' : 'none'

          line.forEach(function (item) {
            item.classList.remove('active')
          })
          if (content.style.display === 'block') {
            line[index].classList.add('active')
            images[index].src = './img/open-vector.svg'
          } else {
            images[index].src = './img/close-vector.svg'
          }
        } else {
          content.style.display = 'none'
          images[contentIndex].src = './img/close-vector.svg'
        }
      })
    })
  })

  searchInput.addEventListener('input', function () {
    let filter = this.value.trim().toLowerCase()

    if (filter === '') {
      buttons.forEach(function (button) {
        button.style.display = 'block'
      })
      return
    }

    buttons.forEach(function (button) {
      const content = button.querySelector('.dropdown-content')
      let hasVisibleItems = false

      if (!content) return

      let items = content.getElementsByTagName('label')

      Array.from(items).forEach(function (item) {
        let text = item.innerText.trim().toLowerCase()
        if (text.includes(filter)) {
          item.classList.add('show')
          hasVisibleItems = true
        } else {
          item.classList.remove('show')
        }
      })
      button.style.display = hasVisibleItems ? 'block' : 'none'
    })
  })
})

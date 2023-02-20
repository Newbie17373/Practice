setTimeout(() => {
  console.log('-------------------------Задание 5--------------------')
}, 2000)

var inputElement = document.getElementById('input')
let timeout = null
inputElement.addEventListener('keyup', autosave)

function autosave() {
  clearTimeout(timeout)
  timeout = setTimeout(function () {
    let currentInputValue = inputElement.value
    console.log(currentInputValue)
  }, 1500)
}

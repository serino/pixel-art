let squares = document.getElementsByClassName(`square`)
let clearButton = document.getElementById(`clearButton`)
let saveButton = document.getElementById(`saveButton`)
let loadButton = document.getElementById(`loadButton`)
let faceButton = document.getElementById(`faceButton`)

let face = [11, 12, 17, 18, 21, 22, 27, 28, 44, 45, 54, 55, 61, 68, 72, 77, 83, 84, 85, 86]
let saved

for (let square of squares) {
  square.addEventListener(`click`, toggleSquare)
}

clearButton.addEventListener(`click`, clear)
saveButton.addEventListener(`click`, save)
loadButton.addEventListener(`click`, load)
faceButton.addEventListener(`click`, drawFace)

function toggleSquare() {
  if (this.classList.contains(`selected`) == false) {
    this.classList.add(`selected`)
  }
  else {
    this.classList.remove(`selected`)
  }
}

function clear() {
  for (let square of squares) {
    square.classList.remove(`selected`)
  }
}

function save() {
  saved = []

  for (let square of squares) {
    if (square.classList.contains(`selected`)) {
      saved.push(square)
    }
  }

  clear()
  loadButton.disabled = false
}

function load() {
  clear()

  for (let square of saved) {
    square.classList.add(`selected`)
  }
}

function drawFace() {
  clear()

  for (let i of face) {
    squares[i].classList.add(`selected`)
  }
}
var points = 0
const pc = document.getElementById('pointcounter')
pc.innerHTML = points

function HoverOver() {
  const Gerbert = document.getElementById('gerbert')
  Gerbert.src = 'sprites\\hover-over.png'
}

function Normal() {
  const Gerbert = document.getElementById('gerbert')
  Gerbert.src = 'sprites\\idle.png'
}

function Click() {
  const Gerbert = document.getElementById('gerbert')
  Gerbert.src = 'sprites\\hit.png'
  points++
  pc.innerHTML = points
}
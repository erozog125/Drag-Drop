const list = document.getElementById('list')

// Uso de la librería Sortable, para crear el movimiento
// dos argumentos: la lista, un objeto con distintos elementos.
Sortable.create(list, {
  animation: 100,
  swapThreshold: 1,
  chosenClass: 'custom-list'
})
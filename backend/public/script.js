const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventListener('click' , function(){
    const videoId = card.getAttribute('id')
    window.location.href = `/video?id=${videoId}`
  })
}

document.querySelector(".close-modal").addEventListener('click', function(){
  modalOverlay.classList.remove('active')
  modalOverlay.querySelector('iframe').src = ""
})

// modalOverlay.querySelector('iframe').src = 'https://www.youtube.com/embed/GykTLqODQuU'
// como temos que mudar dinamicamente, colocamos a linha anterior no FOR
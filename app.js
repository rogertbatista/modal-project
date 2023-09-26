const openBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.modal-overlay');

openBtn.addEventListener('click',function(){
    modalOverlay.classList.add('open-modal');
})

closeBtn.addEventListener('click',function(){
    modalOverlay.classList.remove('open-modal');
})
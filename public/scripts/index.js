const btnSearch = document.querySelector('#page-home main a');
const modal = document.querySelector('#modal');
const btnClose = document.querySelector('#modal header a');

btnSearch.addEventListener('click', () => {
  modal.classList.remove('hide');
})

btnClose.addEventListener('click', () => {
  modal.classList.add('hide');
})
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-contacts__modal-open]'),
    closeModalBtn: document.querySelector('[data-contacts__modal-close]'),
    modal: document.querySelector('[data-contacts__modal-map]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
    const refs = {
      openModalBtn: document.querySelector('.main-btn'),
      openModalMobBtn: document.querySelector('.mob-menu__main-btn'),
      closeModalBtn: document.querySelector('.modal-order-close__btn'),
      modal: document.querySelector('.backdrop-order'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.openModalMobBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle('modal-open')
      refs.modal.classList.toggle('is-hidden');
    }
  })();
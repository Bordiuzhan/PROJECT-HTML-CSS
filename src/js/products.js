(() => {
    const refs = {
      openIceCreamBtn: document.querySelector('.ice-cream-btn'),
      openIceCoffeeBtn: document.querySelector('.ice-coffee-btn'),
      openMilkshakesBtn: document.querySelector('.milkshakes-btn'),
    //   closeModalBtn: document.querySelector('.modal-order-close__btn'),
      descriptionIceCream: document.querySelector('.description-ice-cream'),
      descriptionIceCoffee: document.querySelector('.description-ice-coffee'),
      descriptionMilkshakes: document.querySelector('.description-milkshakes'),
    };
  
    refs.openIceCreamBtn.addEventListener('click', toggleDescriptionIceCream);
    refs.openIceCoffeeBtn.addEventListener('click', toggleDescriptionIceCoffee);
    refs.openMilkshakesBtn.addEventListener('click', toggleDescriptionMilkshakes);
  
    function toggleDescriptionIceCream() {
      refs.descriptionIceCream.classList.toggle('open-description');
      refs.openIceCreamBtn.classList.toggle('open-description');
    }

    function toggleDescriptionIceCoffee() {
      refs.descriptionIceCoffee.classList.toggle('open-description');
      refs.openIceCoffeeBtn.classList.toggle('open-description');
    }

    function toggleDescriptionMilkshakes() {
      refs.descriptionMilkshakes.classList.toggle('open-description');
      refs.openMilkshakesBtn.classList.toggle('open-description');
    }
})();
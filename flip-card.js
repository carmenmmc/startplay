var monedas = document.querySelectorAll('.monedas');

[...monedas].forEach((monedas)=>{
  monedas.addEventListener( 'click', function() {
    monedas.classList.toggle('flip');
  });
});
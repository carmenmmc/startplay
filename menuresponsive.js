	const btn_burguer = document.querySelector('.burguer-boton')

	if (btn_burguer){

		btn_burguer.addEventListener('click', () => {

			const elem_menu = document.querySelector('.lista')

			elem_menu.classList.toggle('show')

		})
	}

const elem_menu = document.querySelector('.lista')
const items = document.querySelector('.pagina')

if (elem_menu){
	elem_menu.addEventListener('click', function(e) {

		e.stopPropagation();
		document.addEventListener("click", function(e){
			
			console.log('click')
			var clic = e.target;
		
			var show = elem_menu.classList.contains('show');
		
			console.log(clic);
		
			if(clic != items && show != false){
				console.log(clic);
				console.log(show);
				btn_burguer.classList.toggle('show')
			}
		}, false);
		elem_menu.classList.toggle('show')
	})
}	
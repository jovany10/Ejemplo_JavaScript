console.warn("cargando script");

var contador = 0;

function incrementa()
	{
		let x = document.getElementById('cuenta');
		x.innerText = contador;
		contador = contador + 1;
		setTimeout(incrementa, 1000)
	}

incrementa();



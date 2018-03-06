var xhr = new XMLHttpRequest();

xhr.open( "GET", "${1: url}" );

xhr.onreadystatechange = () => {

	if ( xhr.readyState == 4 ) {

		if ( xhr.status == 200 ) {

			let dados = JSON.parse( xhr.responseText );

		}else {

			console.log( `Não foi possivel receber dados dos servidor error: ${ xhr.responseText }` );

		}

	}

};

xhr.send();

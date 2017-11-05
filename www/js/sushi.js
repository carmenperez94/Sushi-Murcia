var app = {
	inicio: function() {
		this.iniciaFastClick();
	},

	iniciaFastClick: function() {
		FastClick.attach(document.body);
	},

	dispositivoListo: function() {
		navigator.geolocation.getCurrentPosition(app.pintaCoordenadasEnMapa, app.errorAlSolicitarLocalizacion);
	},

	pintaCoordenadasEnMapa: function(position) {
		var miMapa = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);

		L.tileLayer('https://api.mapbox.com/styles/v1/carmencode/cj9cms4xd5duc2rtid327amaj/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2FybWVuY29kZSIsImEiOiJjajljbXBjYnkxcmdhMnlud3Z6b3JlbzF1In0.j_w8HZnQfrLArVJQpplmzA', {
			maxZoom: 18
		}).addTo(miMapa);


		const route = L.Routing.control({
			waypoints: [
			L.latLng(position.coords.latitude, position.coords.longitude),
			L.latLng(38.0013731, -1.1420178)
			],
			lineOptions: {styles: [{color: '#FC6C23'}]},

			routeWhileDragging: true
		}).addTo(miMapa);

		const route2 = L.Routing.control({
			waypoints: [
			L.latLng(position.coords.latitude, position.coords.longitude),
			L.latLng(37.98534, -1.13585)
			],
			lineOptions: {styles: [{color: '#FC6C23'}]},

			routeWhileDragging: true
		}).addTo(miMapa);

		const route3 = L.Routing.control({
			waypoints: [
			L.latLng(position.coords.latitude, position.coords.longitude),
			L.latLng(37.9873479, -1.1280486)
			],
			lineOptions: {styles: [{color: '#FC6C23'}]},

			routeWhileDragging: true
		}).addTo(miMapa);

		const route4 = L.Routing.control({
			waypoints: [
			L.latLng(position.coords.latitude, position.coords.longitude),
			L.latLng(37.9918305, -1.1277508)
			],
			lineOptions: {styles: [{color: '#FC6C23'}]},

			routeWhileDragging: true
		}).addTo(miMapa);

		const route5 = L.Routing.control({
			waypoints: [
			L.latLng(position.coords.latitude, position.coords.longitude),
			L.latLng(37.9906425, -1.1328276)
			],
			lineOptions: {styles: [{color: '#FC6C23'}]},

			routeWhileDragging: true
		}).addTo(miMapa);

		const route6 = L.Routing.control({
			waypoints: [
			L.latLng(position.coords.latitude, position.coords.longitude),
			L.latLng(37.9955811, -1.1235046)
			],
			lineOptions: {styles: [{color: '#FC6C23'}]},

			routeWhileDragging: true
		}).addTo(miMapa);

		const route7 = L.Routing.control({
			waypoints: [
			L.latLng(position.coords.latitude, position.coords.longitude),
			L.latLng(38.0005081, -1.138171)
			],
			lineOptions: {styles: [{color: '#FC6C23'}]},

			routeWhileDragging: true
		}).addTo(miMapa);

		const route8 = L.Routing.control({
			waypoints: [
			L.latLng(position.coords.latitude, position.coords.longitude),
			L.latLng(37.994018, -1.1416929)
			],
			lineOptions: {styles: [{color: '#FC6C23'}]},

			routeWhileDragging: true
		}).addTo(miMapa);

		const route9 = L.Routing.control({
			waypoints: [
			L.latLng(position.coords.latitude, position.coords.longitude),
			L.latLng(37.9843882, -1.1326838)
			],
			lineOptions: {styles: [{color: '#FC6C23'}]},

			routeWhileDragging: true
		}).addTo(miMapa);


		app.pintaMarcador([37.9843882, -1.1326838], 'Hola Sushi', miMapa);
		app.pintaMarcador([37.994018, -1.1416929], 'Sake Sushi', miMapa);
		app.pintaMarcador([38.0005081, -1.138171], 'Sushi Up', miMapa);
		app.pintaMarcador([37.9955811, -1.1235046], 'Terra Sushi', miMapa);
		app.pintaMarcador([37.9906425, -1.1328276], 'Kokoro Gastro Sushi', miMapa);
		app.pintaMarcador([37.9918305, -1.1277508], 'Sushi Sakura', miMapa);
		app.pintaMarcador([37.9873479, -1.1280486], 'Green Sushi', miMapa);
		app.pintaMarcador([37.98534, -1.13585], 'Enso Sushi', miMapa);
		app.pintaMarcador([38.0013731, -1.1420178], 'Yamato Sushi', miMapa);
		app.pintaMarcador([position.coords.latitude, position.coords.longitude], '¡Estoy aquí!', miMapa);
		

	},

  	pintaMarcador: function(latlng, texto, mapa){
    	var marcador = L.marker(latlng).addTo(mapa);
    	marcador.bindPopup(texto).openPopup();
	},


	errorAlSolicitarLocalizacion: function(error) {
		console.log(error.code + ': ' + error.message);
	},

	

	};


if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		app.inicio();
	}, false);
	document.addEventListener('deviceready', function() {
		app.dispositivoListo();
	}, false);
}
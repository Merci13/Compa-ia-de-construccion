var datos={ // variable global que tendra todos los projectos guardados
	projectos:[]

}

var Persister = { //metodos para guardar y cargar los datos
	save: function (key, value) {
		localStorage.setItem(key, value);
	},
	load: function(key, default_value) {
		return localStorage.getItem(key) || default_value;
	},
	saveObj: function(key, value) {
		var json_string = JSON.stringify(value);
		this.save(key, json_string);
	},
	loadObj: function(key, default_value) {
		var json_string = this.load(key, default_value);
		return JSON.parse(json_string);
	}
};




function load_data() {
	var pordefecto={
		nombre:"",
			personas:[],
			tareas:[],
			progreso:0
	};
	
	datos = Persister.loadObj('projectos',pordefecto);
	console.log(datos)
	

	
	for (var i = 0; i < datos.length; i++) {
		datos[i].nombreProjecto.id = i;
		//if (datos[i].nombreProjecto.activo === true) {
		
		$('#tbDestino').append('<tr><td>'+datos[i].nombreProjecto.nombre+'</td><td>'+datos[i].nombreProjecto.tareas.length +'</td><td>'+datos[i].nombreProjecto.personas.length+'</td><td> '+datos[i].nombreProjecto.progreso+'%</td><td><button class="btn btn-info" onClick="editarProyecto(' + datos[i].nombreProjecto.id + ')">editar</button></td></tr>');
	//}
	};
	
};

/*
	metodo para guardar el id del proyecto que quiero editar 
	en la pagina siguiene
*/
function editarProyecto(id) {
	Persister.saveObj('id_proyecto_editar',id);// guarda en local storage el id del proyecto a editar

	window.location.href ="./editar.html";//llama a la otra pagina
	
};



$(document).ready(function() {
	load_data();

		 $('#agregar_nuevo_proyecto').click(function(event) {
			
		var nombreProjecto = $('#nombre_nuevo_projecto').val();
		var projecto={
			nombre:$('#nombre_nuevo_projecto').val(),
			personas:{
				nombre,
				id,
				tarea:{
					id,
					nombre,
					orden
				}
			},
			tareas:[],
			progreso:0,
			
		}
		datos.push({nombreProjecto: projecto});
		Persister.saveObj('projectos',datos);
		$('#tbDestino').append('<tr><td>'+datos.nombre // se crea la linea de la tabla con los datos del proyecto agregado
			+' </td><td>'+projecto.tareas.length+'</td><td>'+projecto.personas.length
			+'</td> <td>'+projecto.progreso.length+'%</td><td><button class="btn btn-info" id="'+nombreProjecto
			+'">editar</button></td></tr>');
		
	
		});

});








$('#clear').click(function(event) {
		localStorage.clear();
		load_data();
	});

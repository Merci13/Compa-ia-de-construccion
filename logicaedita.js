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

/*
	Document ready del editar
*/
var datos = Persister.loadObj('projectos', []);
	var id = Persister.loadObj('id_proyecto_editar', -1);

$(document).ready(function() {
	

	console.log(id);

if (id>-1) {

	console.log(datos[id].nombreProjecto.nombre);
	$("#editarProjecto").text(datos[id].nombreProjecto.nombre);
	for (var i = 0; i < datos[id].nombreProjecto.length; i++){
		$('#porHacer').append('<div id="'+guid()+'" draggable="true" ondragstart="drag(event)"><button class="btn btn-default" type="submit">'+datos[id].nombreProjecto.tareas[2]+'</button><br></div>');
		
	}

	var porhacer=0;
	var enprogreso=0;
	var finalizados=0;
	
	for (var i = 0; i < datos[id].nombreProjecto.tareas.length; i++) {
		datos[id].nombreProjecto.tareas.length;
		if (datos[id].nombreProjecto.tareas[i].orden==1) {
			porhacer++;
		}else if (datos[id].nombreProjecto.tareas[i].orden==2) {
			enprogreso++;
		}else{
			finalizados++;
		};

		

	};
var data = [
        { name: 'Por Hacer', y: porhacer },
        {name: 'En progreso', y: enprogreso},
        {name: 'Finalizadas', y: finalizados },
       
    ];
var texto= "Tareas Por Proyecto";
draw_chart_tareas_proyecto('graficio_tareas_por_proyecto',data);



}else{
	window.location.href ="./index.html";

}


/*
	Metodo de agregar persona 
*/
$("#AgregarPersona").click(function(event) {

	var nombrePersona=$("#nombre_nuevo_persona").val();
	datos[id].nombreProjecto.personas.push({'id':datos[id].nombreProjecto.personas, 'nombre': nombrePersona});
	var personanueva=$("#nombre_nuevo_persona").val();
	
	console.log(datos[id].nombreProjecto.personas);


		Persister.saveObj('projectos',datos);
		$('#colaborador').append('<div id="" ><button class="btn btn-default" type="submit">'+personanueva+'</button><br></div>');
		
	
		});

});

/*
Metodo para agregar tareas
*/
$("#AgregarTarea").click(function(event) {

	var tarea=$("#nombre_nuevo_tarea").val();
	datos[id].nombreProjecto.tareas.push({'id':datos[id].nombreProjecto.tareas.length, 'tarea': tarea,'orden':1});
	console.log(datos[id].nombreProjecto.tareas);


		Persister.saveObj('projectos',datos);
		console.log(datos);

		$('#porHacer').append('<div id="'+guid()+'" draggable="true" ondragstart="drag(event)"><button class="btn btn-default" type="submit">'+tarea+'</button><br></div>');
		
	
		});



//Metodos para el drag and drop

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

//metodo para dibujar el grafico
function draw_chart_tareas_proyecto(selector, data) {
	
	Highcharts.chart(selector, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Tareas del Proyecto'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: data
        }]
    });
}








	var personanueva=$("#nombre_nuevo_persona").val();
	
	console.log(datos[id].nombreProjecto.personas);


		Persister.saveObj('projectos',datos);
		$('#colaborador').append('<div id="" ><button class="btn btn-default" type="submit">'+personanueva+'</button><br></div>');
		
	
		});

});

/*
Metodo para agregar tareas
*/
$("#AgregarTarea").click(function(event) {

	var tarea=$("#nombre_nuevo_tarea").val();
	datos[id].nombreProjecto.tareas.push({'id':datos[id].nombreProjecto.tareas.length, 'tarea': tarea,'orden':1});
	console.log(datos[id].nombreProjecto.tareas);


		Persister.saveObj('projectos',datos);
		console.log(datos);

		$('#porHacer').append('<div id="'+guid()+'" draggable="true" ondragstart="drag(event)"><button class="btn btn-default" type="submit">'+tarea+'</button><br></div>');
		
	
		});



//Metodos para el drag and drop

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}










		Persister.saveObj('projectos',datos);
		$('#colaborador').append('<div id="" ><button class="btn btn-default" type="submit">'+personanueva+'</button><br></div>');
		
	
		});

});

/*
Metodo para agregar tareas
*/
$("#AgregarTarea").click(function(event) {

	var tarea=$("#nombre_nuevo_tarea").val();
	datos[id].nombreProjecto.tareas.push({'id':datos[id].nombreProjecto.tareas.length, 'tarea': tarea,'orden':1});
	console.log(datos[id].nombreProjecto.tareas);


		Persister.saveObj('projectos',datos);
		$('#porHacer').append('<div id="'+guid()+'" draggable="true" ondragstart="drag(event)"><button class="btn btn-default" type="submit">'+tarea+'</button><br></div>');
		
	
		});


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}









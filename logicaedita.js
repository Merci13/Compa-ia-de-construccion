</button>
		};

		

	};
	//seccion de las tareas por estado
var tareasEstado = [
        { name: 'Por Hacer', y: porhacer },
        {name: 'En progreso', y: enprogreso},
        {name: 'Finalizadas', y: finalizados },
       
    ];
var texto= "Tareas Por Proyecto";
draw_chart('graficio_tareas_por_proyecto',tareasEstado,texto);

//seccion de tareas por persona
	var Persona=[{
		nombre,
		numerotareas	
	}]
	for (var i = 0; i < datos[id].nombreProjecto.personas.length; i++) {
		var tempPersona=datos[id].nombreProjecto.personas.nombre;
		var tareas=0;
		
		for (var i = 0; i < datos[id].nombreProjecto.personas[i].tarea.length; i++) {
			tareas++;
		}
		Persona.push(tempPersona, tareas);
	}
draw_chart('graficio_tareas_por_proyecto',data,texto);



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
function draw_chart(selector, data,texto) {
	
	Highcharts.chart(selector, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: texto
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









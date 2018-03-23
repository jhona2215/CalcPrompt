
document.getElementById("prompt").addEventListener("keyup",command);
var msnIni="Consola de comandos - Calculo de variables\n* Nota: No borrar el símbolo '>' de la consola *\n>"
document.getElementById("prompt").value=msnIni;
var consola= document.getElementById("prompt");
var search = new Command();

function command(evento){
	if(evento.keyCode == "13"){
		var com="";
		var i = consola.value.length-2;
		while(consola.value.charAt(i)!= '>'){
			com=consola.value.charAt(i)+com;
			i--;
		}
		com=com.toLowerCase();
		switch(com){
			case "help":
				consola.value=consola.value+search.help(permiso);
				break;
			case "calc":
				document.getElementById("prompt").removeEventListener("keyup",command);
				document.getElementById("prompt").addEventListener("keyup",calculate);
				consola.value=consola.value+search.calc();
				break;
			case "clear":
				consola.value=msnIni;
				break;
			default:
				consola.value=consola.value+"El comando '"+com+"' no existe. \nPara información de los comandos disponibles ingrese 'help'\n>";
				break;
		}
	}
}

function calculate (evento){
	if(evento.keyCode == "13"){
		var ecu="",vari="";
		var i = consola.value.length-2;
		while(consola.value.charAt(i)!= '>'){
			vari=consola.value.charAt(i)+vari;
			i--;
		}
		i=i-12;
		while(consola.value.charAt(i)!= '>'){
			ecu=consola.value.charAt(i)+ecu;
			i--;
		}
		var e = new Equation();
		//Setea la ecuación y la variable ingresadas a un objeto de la clase Equation
		e.setFunc(ecu);
		e.setVari(vari);

		consola.value=consola.value+"Lamentablemente aun no funciona :(\n>";
		document.getElementById("prompt").addEventListener("keyup",command);
		document.getElementById("prompt").removeEventListener("keyup",calculate);
	}
}

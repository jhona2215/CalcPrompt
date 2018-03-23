function Command(){	
}
Command.prototype.help = function(){
	return "Comandos:\n"+
		"  calc:      Permite calcular el valor de una variable dentro de una ecuación ingresada\n"+
		"  clear:     limpiar la pantalla\n>";
};


Command.prototype.calc = function(){
	return "---------- Calcular variable -----------\n"+
			"Ecuación ->\n"+
			"variable ->";
};

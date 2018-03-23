function Equation(){
	this.func;//ecuación original
	this.vari;//variable original
	this.iter;//valor de la variable en un momento determinado
	this.res0;//valor calculado por la secante
	this.res1;//valor anterior calculado por la secante 
}

//Metodos get y set
Equation.prototype.setFunc = function(func){
	this.func=func;
};

Equation.prototype.getFunc = function(){
	return this.func;
};

Equation.prototype.setVari = function(vari){
	this.vari=vari;
};

Equation.prototype.getVari = function(){
	return this.vari;
};

//execute maneja un proceso recursivo para el metodo de la secante el cual va a retornar un valor double que corresponde al 
//resultado de de ecuación o en otras palabras su(s) raiz(ces)
//

Equation.prototype.execute = function(i){
	 var res;
	 return res;
};

//reempx recibe un valor double el cual va a reemplazar directamente en la posición en la que encuentre la variable solicitada
//retornando un string semejante a la ecuación original pero sin variables de por medio para facilitar el calculo.
Equation.prototype.reempX = function(varia){
	var a="";
	
	return a;
};

//operParen recibe la ecuación modificada sin variables y realiza las operaciones dentro de los parentesis de la ecuación y devuelve
//un string con la ecuación sin parentesis, solo operaciones simples
Equation.prototype.operParen = function(ecu){
	var a="";

	return a;
};

//oper recibe la ecuación final sin parentesis y realiza las operaciones finales para la raiz de la ecuación retorna un string con el resultado final
Equation.prototype.oper = function(ecu){
	var a="";

	return a;
};
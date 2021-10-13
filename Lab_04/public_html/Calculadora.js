
var num1;
var num2;
var box = 0;
var operador;

function limpiar(){
    location.reload();
}

function colocarNumero(num){
    if(box === 0){
    document.getElementById("html_num1").append(num);
    }
    if(box === 1){
        document.getElementById("html_num2").append(num);
    }
    
}

function operador(ope,num3){
    box = 1;
    operador = num3;
  
    num1 = parseFloat(document.getElementById("html_num1").value);
    console.log(num1);
    document.getElementById("html_operador").append(ope);
}


function operaciones(){ //Operaciones
    num2 = parseFloat(document.getElementById("html_num2").value);
 
    var resultado = 0;
    
    
        
    switch (operador){
            
        case 1:
        resultado = suma(num1, num2);
        alert(resultado);
        break;
            
        case 2:
        resultado = resta(num1, num2);
        break;
        
        case 3:    
        resultado = multiplicación(num1, num2);
        break;
        
        case 4:    
        resultado = division(num1, num2);
        break;
            
        } //fin del switch de operaciones
        
    document.getElementById("resultado").innerHTML = "<h1>" + resultado + "<h1>";
    
    
    
    
}

function suma(n1, n2){   
    
    return n1+n2;
    
}

function resta(n1, n2){   
    
    return n1-n2;
    
}

function multiplicación(n1, n2){   
    
    return n1*n2;
    
}

function division(n1, n2){   
    
    return n1/n2;
    
}
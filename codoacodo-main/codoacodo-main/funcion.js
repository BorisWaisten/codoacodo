function validarnombre(){
    valor = document.getElementById('nombre').value;
    
    if( valor == null || valor.length == 0  )
    {
        
        alert("Tenes que completar el Nombre!"); 
        elemento = document.getElementById('nombre');
        elemento.focus();
        
        return false;
    }    
    return true;
    
}
function validarapellido(){
    valor = document.getElementById('apellido').value;
    
    if( valor == null || valor.length == 0  )
    {
        
        alert("Tenes que completar el Apellido!");
        elemento = document.getElementById('apellido');
        elemento.focus();
        
        return false;
    }
    return true;
    
}


function validarcantidad(){
    
    valor = Number(document.getElementById("cantidad").value) ;
    console.log(valor);
            
    // if( isNaN(valor) ) 
    // {
    //     document.getElementById('mensaje4').innerHTML = "ingrese la cantidad";
    //     limpiar();
    //     return false;
    // }
    // else    
    // {
        if( valor <= 0 || valor > 50  || valor == null) 
        {
            alert("la cantidad debe ser mayor a 0 y menor de 50");
            return false;
        }
    // }
    return true;          
}
function validarcategoria(){
    
    indice = document.getElementById("categoria").selectedIndex;
            
    if( indice == null || indice == 0 ) 
    {
        alert("selecciona alguna de las categorias disponibles");
        return false;
    };
    return true;    
}

function validaremail(){
    valor = document.getElementById("email").value;
            
              
            if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar)+$/.test(valor)))
            {
                alert("No es una direccion de email correcta");
                
                elemento = document.getElementById('email');
                elemento.value = '';
                elemento.focus();

                return false;
            }
            return true;          
}


function total()
{
  let cant = document.getElementById("cantidad").value;
  
  cant = cant * document.getElementById('categoria').value *200;
 
  document.getElementById("total").value = (`Total a pagar $ ${cant}`);

}



function validacion() 
{
        validarnombre();
        validarapellido(); 
        validaremail();
        validarcantidad();  
        validarcategoria(); 
         total();  
}


function ponercero()
{
  document.getElementById("nombre").focus();
 document.getElementById("nombre").value="";
 document.getElementById("apellido").value="";
 document.getElementById("email").value="";
 document.getElementById("cantidad").value="";
 document.getElementById("categoria").value="";
 document.getElementsByTagName('label').value="";
 document.getElementById("total").value ="Total a pagar $";
}
//function escolhaFrango(){
    
    //document.getElementById("frango").style.borderColor="green";
  //  document.getElementById("carne").style.borderColor="white";
//
//}

//function escolhaCarne(){
  
  //  document.getElementById("carne").style.borderColor="green";
    //document.getElementById("frango").style.borderColor="white";

//}

let mainpratos;
let mainbebidas;
let mainsobremesas;
const Pratos=["frango","carne","pizza","vegano"];
const Bebidas=["coca","guarana","pepsi","chagelado"];
const Sobremesas=["pudim","sorvete","torta","frutas"];

// recebe x=id do produto e y=tipo do produto
function escolha(x,y){

    if(y==Pratos){
        mainpratos=x;
    }
    if(y==Bebidas){
        mainbebidas=x;
    }
    if(y==Sobremesas){
        mainsobremesas=x;
    }
    

    for(let i=0;i<y.length;i++){
        if(x==y[i]){
            document.getElementById(x).style.borderColor="green";
        }else{
            document.getElementById(y[i]).style.borderColor="white";
        }
    }
    finaliza();
}

function finaliza(){
    if(mainpratos!=null && mainbebidas!=null && mainsobremesas!= null){
        document.getElementById("caixainferior").style.backgroundColor="green";
        document.getElementById("selecionar").style.display="none";
        document.getElementById("selecionar-finalizar").style.display="block";

    }
}


//finalizacao pedido

function finalizarPedido(){
    
    alert("Olá, gostaria de pedir um combo: " + mainpratos + ", " + mainbebidas + " e " + mainsobremesas);

}
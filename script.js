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

let t1=encodeURIComponent("Olá, gostaria de fazer o pedido:\n- Prato: ");
let t2=encodeURIComponent("\n- Bebida: ");
let t3=encodeURIComponent("\n- Sobremesa: ");
let t4=encodeURIComponent("\nTotal: R$ 27,70");


function finalizarPedido(){
    
    window.open("https://wa.me/+5547996993721?text="+t1+mainpratos+t2+mainbebidas+t3+mainsobremesas+t4);
    
}
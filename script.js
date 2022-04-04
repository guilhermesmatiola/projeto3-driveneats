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
let precopratos
let precobebidas
let precosobremesas

const Pratos=["frango","carne","pizza","vegano"];
const valorpratos=["16.99", "18.99", "19.99","14.99"];

const Bebidas=["coca","guarana","pepsi","chagelado"];
const valorbebidas=["6.99", "5.99", "6.49","4.99"];

const Sobremesas=["pudim","sorvete","torta","frutas"];
const valorsobremesas=["3.99", "4.99", "3.49","2.99"];


// recebe x=id do produto e y=tipo do produto
function escolha(x,y){

    if(y==Pratos){
       // mainpratos=x;
        mainpratos=String(x);
    }
    if(y==Bebidas){
        // mainbebidas=x;
        mainbebidas=String(x);
    }
    if(y==Sobremesas){
        // mainsobremesas=x;
        mainsobremesas=String(x);
    }
    
    let z="i"+x;
    for(let i=0;i<y.length;i++){
        if(x==y[i]){
            document.getElementById(x).style.borderColor="green";
            document.getElementById(z).style.display="block";

            if(y==Pratos){
                precopratos=Number(valorpratos[i]);
            }
            if(y==Bebidas){
                precobebidas=Number(valorbebidas[i]);
            }
            if(y==Sobremesas){
                precosobremesas=Number(valorsobremesas[i]);
            }


        }else{
            document.getElementById(y[i]).style.borderColor="white";
            document.getElementById("i"+y[i]).style.display="none";
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
let t4=encodeURIComponent("\nTotal: R$ ");


function finalizarPedido(){
    let valorfinal = (precopratos+precobebidas+precosobremesas);
 //   alert(valorfinal);
    let nome=prompt("Qual seu nome?");
    let endereco=prompt("Qual seu endereço?");
    let t5=encodeURIComponent("\nNome: " + nome);
    let t6=encodeURIComponent("\nEndereço: " + endereco);
    valorfinal=valorfinal.toFixed(2);
    valorfinal=encodeURIComponent(valorfinal);
    window.open("https://wa.me/+5547996993721?text="+t1+mainpratos+t2+mainbebidas+t3+mainsobremesas+t4+valorfinal+t5+t6);
    
}
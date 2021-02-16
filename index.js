

function inicializarPagina(){
    $welcome=document.querySelector(".welcome");
    $listIcon=document.querySelector(".headerIcons__loginIcon");
    $logoIcon=document.querySelector(".headerSiteLogo");
    $homeIcon=document.querySelector(".headerIcons__menuIcon");
    $listPage=document.querySelector(".card-list");
    $descriptionPage=document.querySelector(".description-list");
    
    function cambiarADetalles(){}

    function iconProcedure(boton){
        switch (boton){
            case "list":{
                if($listPage.style.display=="" && $welcome.style.display!=""){/*No lee bien el display y no entra por aqui*/
                    cambiarALista("home");
                }else if($listPage.style.display=="" && $welcome.style.display==""){/*Por error entra por aqui*/
                    cambiarALista("detail");
                }else{
                    alert("You are already on that page");
                }
                break;
            }
            default:{
                if($welcome.style.display==""){
                    window.location.href="index.html";
                }else{
                    alert("You are already on that page");
                }
                break;
            }
        }
        
    }
    $listIcon.addEventListener("click",function(button){
        iconProcedure("list");
    });
    $logoIcon.addEventListener("click",function(button){
        iconProcedure("logo");
    });
    $homeIcon.addEventListener("click",function(button){
        iconProcedure("home");
    });
}


document.onreadystatechange = function(){
    if(document.readyState === "complete"){
        inicializarPagina();
    }
}
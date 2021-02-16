function cambiarALista(origen){
    $welcome=document.querySelector(".welcome");
    $listIcon=document.querySelector(".headerIcons__loginIcon");
    $logoIcon=document.querySelector(".headerSiteLogo");
    $homeIcon=document.querySelector(".headerIcons__menuIcon");
    $listPage=document.querySelector(".card-list");
    $descriptionPage=document.querySelector(".description-list");


    if(origen=="home"){
        $welcome.style.display="";
        $listPage.style.display="flex";
    }else{ /*origen vale "detail" por el error anterior*/ 
        $descriptionPage.style.display="";/*no funciona*/
        $listPage.style.display="flex";/*sorprendentemente funciona*/
    }
    
}
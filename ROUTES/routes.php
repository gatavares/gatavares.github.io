<?php 
    if(isset($_GET['p'])){
        $pagina = $_GET['p'];

        if($pagina == "home")
            include('content/pages/home.html');  
        // else if($pagina == "contacto")
        //     include('content/pages/contacto.php');
        else
            include('content/pages/404.html');
    }else{
        include('content/pages/home.html');
    }
?>
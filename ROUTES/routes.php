<?php 
    if(isset($_GET['p'])){
        $pagina = $_GET['p'];

        if($pagina == "home")
            include('CONTENT/PAGES/home.html');  
        // else if($pagina == "contacto")
        //     include('CONTENT/PAGES/contacto.php');
        else
            include('CONTENT/PAGES/404.html');
    }else{
        include('CONTENT/PAGES/home.html');
    }
?>
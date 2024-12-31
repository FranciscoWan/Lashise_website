$(document).ready(function(){

    $('.menu_hamburguer').click(function(){
        $('nav').slideToggle(); // Realiza a verificação se o elemento esta visivel ou não, caso esteja invisível, ele se torna visível, caso esteja visível, se torna invisível.
    })

    $('#carousel_img').slick({
        autoplay: true,
        arrows: false,
    })
})
$(document).ready(function(){
    $('section#pantalla a').on('click',function(){
        $('#modal img').attr('src', $(this).attr('data-image-url'));
    });
});

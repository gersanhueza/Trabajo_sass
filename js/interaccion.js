$(document).ready(function () {

    $('#nombre').prop("disabled", true);
    $('#pais').prop("disabled", true);
    $('#ciudad').prop("disabled", true);	
    $('#codigo_pais').prop("disabled", true);
    $('#telefono').prop("disabled", true);
    $('#cargo').prop("disabled", true);
    $('#area_apoyo').prop("disabled", true);
    $('#apellido').prop("disabled", true);
    $('#region').prop("disabled", true);
    $('#email').prop("disabled", true);
    $('#nombre_empresa').prop("disabled", true);
    $('#sector_industrial').prop("disabled", true);
    $('#necesidad').prop("disabled", true);
    $('#titulo').prop("disabled", true);
    $('#btn_ingresar').prop("disabled", true);
        
$(".radio1").click(function(){
    if($('#radio_button').prop('checked')){

    $('#nombre').prop("disabled", false);
    $('#pais').prop("disabled", false);
    $('#ciudad').prop("disabled", false);
    $('#codigo_pais').prop("disabled", false);	
    $('#telefono').prop("disabled", false);
    $('#cargo').prop("disabled", false);
    $('#area_apoyo').prop("disabled", false);
    $('#apellido').prop("disabled", false);
    $('#region').prop("disabled", false);
    $('#email').prop("disabled", false);
    $('#nombre_empresa').prop("disabled", false);
    $('#sector_industrial').prop("disabled", false);
    $('#necesidad').prop("disabled", false);
    $('#titulo').prop("disabled", false);
    $('#btn_ingresar').prop("disabled", false);


    }else if($('#radio_button1').prop('checked')){

        $('#nombre').prop("disabled", false);
        $('#pais').prop("disabled", false);
        $('#ciudad').prop("disabled", false);
        $('#codigo_pais').prop("disabled", false);	
        $('#telefono').prop("disabled", false);
        $('#cargo').prop("disabled", true);
        $('#area_apoyo').prop("disabled", true);
        $('#apellido').prop("disabled", false);
        $('#region').prop("disabled", false);
        $('#email').prop("disabled", false);
        $('#nombre_empresa').prop("disabled", true);
        $('#sector_industrial').prop("disabled", true);
        $('#necesidad').prop("disabled", false);
        $('#titulo').prop("disabled", false);
        $('#btn_ingresar').prop("disabled", false);


    }else{

        $('#nombre').prop("disabled", true);
        $('#pais').prop("disabled", true);
        $('#ciudad').prop("disabled", true);
        $('#codigo_pais').prop("disabled", true);	
        $('#telefono').prop("disabled", true);
        $('#cargo').prop("disabled", true);
        $('#area_apoyo').prop("disabled", true);
        $('#apellido').prop("disabled", true);
        $('#region').prop("disabled", true);
        $('#email').prop("disabled", true);
        $('#nombre_empresa').prop("disabled", true);
        $('#sector_industrial').prop("disabled", true);
        $('#necesidad').prop("disabled", true);
        $('#titulo').prop("disabled", true);
        $('#btn_ingresar').prop("disabled", true);

    }
});

});
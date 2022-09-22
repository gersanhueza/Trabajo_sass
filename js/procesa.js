$(document).ready(function () {

$('#btn_ingresar').click(function () {
  
  if($('#radio_button').prop('checked')){

    if( $("#nombre").val() == "" ||
        $("#pais").val() == "" ||
        $("#ciudad").val() == "" ||
        $("#cargo").val() == "" ||
        $("#area_apoyo").val() == "" ||
        $("#apellido").val() == "" ||
        $("#region").val() == "" ||
        $("#nombre_empresa").val() == "" ||
        $("#sector_industrial").val() == "" ||
        $("#necesidad").val() == "" ||
        $("#titulo").val() == "" ||
        $("#codigo_pais").val() == ""||
        $("#telefono").val() == "" ){

        Swal.fire({
            icon: 'error',
            title: 'FALTA ALGO',
            position: 'top',
            allowOutsideClick: false,
            text: 'RELLENE TODOS LOS CAMPOS'
          })

          return false;

    }else if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {

        Swal.fire({
          icon: 'error',
          position: 'top',
          allowOutsideClick: false,
          title: 'CAMPO EMAIL',
          text: 'NO ES CORRECTO O VALIDO'
        })

        return false;
        
    } else {

      $('#btn_ingresar').attr("disabled", true);

      var datos = $('#frmenviar').serialize();

      $.ajax({
        type: "POST",
        url: "",
        data: datos,

        success: function (a) {

          console.log(datos);

          if (a == 1) {

            Swal.fire({
              title: 'AVISO',
              position: 'top',
              allowOutsideClick: false,
              text: "Registro Ingresado Correctamente",
              icon: 'success'									
            }).then((result) => {
              if (result.isConfirmed) {

                $('#frmenviar').trigger('reset');
                window.location = "";
                $('#btn_ingresar').attr("disabled", false);

              }

            })

            return false;

          } else {

            Swal.fire({
              icon: 'error',
              position: 'top',
              allowOutsideClick: false,
              title: 'Registro no Ingresado',
              text: 'Verifique algun caracter no valido en los campos'
            })

            return false;

          }

        }
      });

      return false;
    }

  }else{

    if( $("#nombre").val() == "" ||
        $("#pais").val() == "" ||
        $("#ciudad").val() == "" ||
        $("#apellido").val() == "" ||
        $("#region").val() == "" ||
        $("#necesidad").val() == "" ||
        $("#titulo").val() == "" ||
        $("#codigo_pais").val() == ""||
        $("#telefono").val() == "" ){

        Swal.fire({
            icon: 'error',
            title: 'FALTA ALGO',
            position: 'top',
            allowOutsideClick: false,
            text: 'RELLENE TODOS LOS CAMPOS'
          })

          return false;

    }else if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {

        Swal.fire({
          icon: 'error',
          position: 'top',
          allowOutsideClick: false,
          title: 'CAMPO EMAIL',
          text: 'NO ES CORRECTO O VALIDO'
        })

        return false;

    } else {

      $('#btn_ingresar').attr("disabled", true);

      var datos = $('#frmenviar').serialize();

      $.ajax({
        type: "POST",
        url: "",
        data: datos,

        success: function (a) {

          console.log(datos);
          console.log(pcs);
          if (a == 1) {

            Swal.fire({
              title: 'AVISO',
              position: 'top',
              allowOutsideClick: false,
              text: "Registro Ingresado Correctamente",
              icon: 'success'									
            }).then((result) => {
              if (result.isConfirmed) {

                $('#frmenviar').trigger('reset');
                window.location = "";
                $('#btn_ingresar').attr("disabled", false);

              }

            })

            return false;

          } else {

            Swal.fire({
              icon: 'error',
              position: 'top',
              allowOutsideClick: false,
              title: 'Registro no Ingresado',
              text: 'Verifique algun caracter no valido en los campos'
            })

            return false;

          }

        }
      });

      return false;
    }
  }


    });

});
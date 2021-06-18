$(document).ready(function() {        
    $("#alertSI").hide();
    $("#alertNO").hide();
    $("#TelMalo").hide();
     $("#form1").submit(function(e){
      user = $.trim($("#nombre").val());
      pass = $.trim($("#correo").val());
      tel =  $.trim($("#telefono").val());
      tipo =  $.trim($("#tipo").val());
      mes =  $.trim($("#mensaje").val());
      if(user.length > 0 && pass.length > 0 && tel.length > 0 && tipo.length > 0 && mes.length > 0){
        if(tel.length>10 || tel.length<7){
           $("#TelMalo").fadeTo(2000, 500).slideUp(500, function() {
           $("#TelMalo").slideUp(500);
        });
        return false;
        }else{          
          $("#alertSI").fadeTo(3000, 2000).slideUp(600, function() {
          $("#alertSI").slideUp(2000);
          location.reload();
          });     
          return true;
        }    
      }else{
        $("#alertNO").fadeTo(2000, 500).slideUp(500, function() {
           $("#alertNO").slideUp(500);
        });
        return false;
      }
      });   
    });

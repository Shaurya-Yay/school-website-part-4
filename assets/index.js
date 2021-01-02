//set button id on click to hide first modal
$("#school_alumani1").on( "click", function() {
    $('#modal1').modal('show'); 
    $('#modal3').modal('hide');  
    $('#modal2').modal('hide'); 
});
//trigger next modal
$("#school_alumani2").on( "click", function() {
    $('#modal2').modal('show');
    $('#modal1').modal('hide'); 
    $('#modal3').modal('hide');   
});
$(document).ready(function(){

    $(".head,.eyes,.mouth,.acc").sortable({
        connectWith: "#drop"
      });

    $( ".head,.eyes,.mouth,.acc" ).disableSelection();
    $('.head,.eyes,.mouth,.acc').sortable({ cancel: '.e_title' 
  });

    $("#drop").sortable({
    connectWith: ".head,.eyes,.mouth,.acc"
  });

    $( ".head,.eyes,.mouth,.acc" ).disableSelection();
    $('.head,.eyes,.mouth,.acc').sortable({ cancel: '.e_title' });

});

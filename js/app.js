$(function(){




  $( "#startButton" ).click(function() {
    $( "li" ).each(function( index, element ) {
      // element == this
      $( element ).css( "backgroundColor", "yellow" );
      if ( $( this ).is( "#li4" ) ) {
        return false;
      }
    });
  });

  })

///COPY-PASTING AREA//


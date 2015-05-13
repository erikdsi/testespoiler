"use strict";
var map,
    tmpMarker,
    tmpAddr = null,
    geocoder,
    $endereco = $('#endereco'),
    Curitiba = {
        latitude: -25.4167,
        longitude: -49.2500
    };

function initialize () {
    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng( Curitiba.latitude, Curitiba.longitude )
    };

    map = new google.maps.Map( document.getElementById( 'mapa' ), mapOptions );
    geocoder = new google.maps.Geocoder();

    google.maps.event.addListener( map, 'click', function ( e ) {
        if ( typeof tmpMarker !== 'undefined' ) {
            tmpMarker.setMap(null);
        }


        geocoder.geocode( {latLng: e.latLng}, function ( results, status ) {
            if ( status === 'OK' ) {
                if ( results && results.length ) {
                    $endereco.text(results[0].formatted_address);
                    tmpAddr = {
                        latitude: e.latLng.lat(),
                        longitude: e.latLng.lng(),
                        endereco: results[0].formatted_address
                    };
                }
                else {
                    $endereco.text("Endereço não encontrado.");
                    tmpAddr = null;
                }
            }
            else {
                $endereco.text("Mais devagar!")
            }
        });

        tmpMarker = new google.maps.Marker({
            position: e.latLng,
            map: map
        });
    });
}

google.maps.event.addDomListener( window, 'load', initialize );

$('#adicionar-endereco').click(function(){
    var postData = $.extend( {}, tmpAddr, { csrfmiddlewaretoken: $('[name="csrfmiddlewaretoken"]').val() });
    $.post('/adiciona-ponto/', postData, function (data){
        if ( data.sucesso ) {
            $('#lista').append('<div>'+postData.endereco+'</div>');
        }
    });
});
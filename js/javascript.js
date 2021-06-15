
api_key_weather="31ca2f423976763187fe613d8acb6ae4"

$(document).ready(function () {
    $('img').hide();
    $('.btn').click(function () { 
        city=$('.city_search').val();
        
        if (city=="") {
            alert("Ingrese el nombre de una ciudad")
        }else{
        /* In this section  excecute de API call*/
        url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&&appid="+api_key_weather
            /* alert(url) */
            $.get(url, function(res) {
                // your code here
                tempF=((parseFloat(res.main.temp)-273.15)*9/5+32).toFixed(2)
                
                $('.city').text(res.name+": "+res.weather[0].main);
                $('.temperature').text(tempF+"°F");
                $('.location').html("Coordenadas: Longitud "+res.coord.lon+", Latitud: "+res.coord.lat);
                $('img').show();
                $('img').attr("src", "https://openweathermap.org/img/w/"+res.weather[0].icon+".png");
            }, 'json'); 
        }
    });    
});
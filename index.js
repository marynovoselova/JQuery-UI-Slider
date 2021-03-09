function hexFromRGB(r, g, b) {
    const hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
    ];
    $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
            hex[ nr ] = "0" + val;
        }
    });
    return hex.join( "" ).toUpperCase();
}
function refreshText() {
    const red = $( "#red" ).slider( "value" ),
        green = $( "#green" ).slider( "value" ),
        blue = $( "#blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );
    $( "#text" ).css( "color", "#" + hex );
}

$(function() {
    $( "#red, #green, #blue" ).slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        value: 127,
        slide: refreshText,
        change: refreshText
    });
    $( "#red" ).slider( "value", 140 );
    $( "#green" ).slider( "value", 60 );
    $( "#blue" ).slider( "value", 70 );
});

function refreshSquare() {
    const red = $( "#red2" ).slider( "value" ),
        green = $( "#green2" ).slider( "value" ),
        blue = $( "#blue2" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );
    $( "#square" ).css( "background-color", "#" + hex );
}

$(function() {
    $( "#red2, #green2, #blue2" ).slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        value: 127,
        slide: refreshSquare,
        change: refreshSquare
    });
    $( "#red2" ).slider( "value", 235 );
    $( "#green2" ).slider( "value", 240 );
    $( "#blue2" ).slider( "value", 240 );
});

function onClickButton() {
    const buttonText = document.querySelector( ".slider_first" );
    const buttonBackground = document.querySelector( ".slider_second" );

    if (!event.target.closest("#textColor")) {
        buttonText.style.display = 'none';
        buttonBackground.style.display = 'block';
    } else {
        buttonText.style.display = 'block';
        buttonBackground.style.display = 'none';
    }
}

$(function() {
    $( "#textColor" ).addEventListener("click", onClickButton);
    $( "#backgroundColor" ).addEventListener("click", onClickButton);
});
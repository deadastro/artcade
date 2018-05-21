var x = 0;
var y = 0;
var d = 'Xskdnc3434SDC';

$('#start').click(function () {
    $('#countdown').append("<p style='font-size: 98px; color: firebrick'>ШОБ ТЫ ЗДОХ</p>")
    var rotate = function () {
        $('header').addClass('rotation');
    }
    var link = function () {
        window.location = '/start.html';
    }
    setTimeout(rotate, 2000);
    setTimeout(link, 10000);
});

$('#artyom-start').click(function () {
    $('.artyom').addClass('animation');
    var link2 = function () {
        window.location = '/battle.html';
    }
    setTimeout(link2, 1500)
})

// BATTLE

$('#jump').click(function () {
    $('.artyom').addClass('animation2');
    var removeAnimation = function () {
        $('.artyom').removeClass('animation2');
    }
    setTimeout(removeAnimation, 500);
})


$('#counter').html('<p>Score:' + 0 + '</p>');
$('#counter-p').html('<p style="color: blue">Score:' + 0 + '</p>');


//setTimeout(start, 1);
//var p = 1;
//var num = document.getElementById('counter-p');
//
//function start() {
//    setInterval(increase, 1000);
//}
//
//function increase() {
//    if (p < 100) {
//        p++;
//        $('#counter-p').html('<p style="color: blue">Score:' + p + '</p>')
//    }
//}

setTimeout(function () {
    $('#countdown').html("<p style='font-size: 98px; color: firebrick' class='mega-p'>1</p>");
}, 3000)

setTimeout(function () {
    $('#countdown').empty();
    $('#countdown').html("<p style='font-size: 98px; color: firebrick' class='mega-p'>2</p>");
}, 2000)

setTimeout(function () {
    $('#countdown').empty();
    $('#countdown').html("<p style='font-size: 98px; color: firebrick' class='mega-p'>3</p>");
}, 1000)



setTimeout(function () {
    $('#countdown').empty();
    $('#countdown').html("<p style='font-size: 98px; color: firebrick' class='mega-p'>START!</p>");
    $('#countdown').css('display', 'none');
    setTimeout(function () {
        $('#countdown').empty();
        var z = 1;
        setInterval(function () {
            z = z + 1;
            $('#counter-p').html('<p style="color: blue">Score:' + z + '</p>');
            y = z - 1;
        }, 100);
    });
}, 3500)



$('.lean-class').click(function () {

})

$(function () { // you can wrap it here with in document ready block
    var i = 1;
    $("#jump").click(function () {
        $('#counter').html('<p>Score:' + i++ + '</p>');
        $(document).bind('keypress', function (event) {
            if (event.which === 88 && event.shiftKey) {
                i = i + 1000;
            }
        });
        x = i - 1;
    });
});

$("#jump").click(function () {
    $('.lean').addClass('rotation2');
    var block = function () {
        $('#jump').css('display', 'none');
        $('.main-div').empty();
        $('.main-div-2').empty();
        $('#results').html('<p class="result">Your score:' + x + ' </p>');
        $('#results').append('<br><br><p class="result">Yung Lean score:' + y + '</p>');
        $('#results').append('<span style="padding-right: 10px">Your key</span>');
        $('#results').append('<input type="text" id="key">');
        document.getElementById('key').value = d;
        if (x>y) {
            $('#results').append('<br> You Won)))))');
        } else {
            $('#results').append('<br><br> You are looooooooooooooser)))');
        }
    }
    setTimeout(block, 30000);
});

function PlaySound(melody) {
    alert("On Press of " + melody);
    var path = "/img/volt.mp3"
    var snd = new Audio(path + melody + ".mp3");
    snd.play();
}

function PlaySound(melody) {
    alert("On Press of " + melody);
    var path = "/img/start.mp3"
    var snd = new Audio(path + melody + ".mp3");
    snd.play();
}

$('#pnx').click(function () {
    alert('Пошел ты Нахуй))0 кобЗОн ебаный)))) Играй за аРТЕма))))');
})
var q = 0,
    w = 0;

class Player {
    
    constructor() {
        this.framesPerSecond = 30;
        this.frames = [
            'a-1.png',
            'a-2.png',
            'a-3.png',
            'a-4.png',
            'a-5.png',
            'a-4.png',
            'a-3.png',
            'a-2.png',
            'a-1.png',
        ];    
        
        this.object = $('#player-1');
        this.jumpFrame(0);
    }
    
    jump() {
        let i = 1;
        this.jumpFrame(i);
        
        let intervalId = setInterval(() => {
            i++;
            this.jumpFrame(i);
            if (i === this.frames.length - 1) {
                clearInterval(intervalId);
            }
        }, 1000 / this.framesPerSecond);
    }
    
    jumpFrame(frame) {
        this.object.css('background-image', 'url(public/img/' + this.frames[frame] + ')');
    }
}

class Enemy {
    
    constructor() {
        this.framesPerSecond = 30;
        this.frames = [
            'd-1.png',
            'd-2.png',
            'd-3.png',
            'd-4.png',
            'd-4.png',
            'd-3.png',
            'd-2.png',
            'd-1.png',
        ];    
        
        this.object = $('#player-2');
        this.jumpFrame(0);
    }
    
    jump() {
        let i = 1;
        this.jumpFrame(i);
        
        let intervalId = setInterval(() => {
            i++;
            this.jumpFrame(i);
            if (i === this.frames.length - 1) {
                clearInterval(intervalId);
            }
        }, 1000 / this.framesPerSecond);
    }
    
    jumpFrame(frame) {
        this.object.css('background-image', 'url(public/img/' + this.frames[frame] + ')');
    }
}


$(function() {
    let s = 0,
        l = 0,
        v = 0,
        artyom = new Player(),
        ded = new Enemy();
    
    $(document).on('keyup', (e) => {
        if (e.which === 32) {
            artyom.jump();
            s++;
            $('#score').html('Score: ' + s);
            if (s % 10 === 0) {
                l++;
                $('.level-popup').addClass('active').find('span').text(l);
                $('.level-popup-shade').addClass('active');
                $('#hp').css('width', l*10);
                $('#speed').css('width', l*10);
                $('#ko h1').append('<i class="fas fa-bolt"></i>')
                setTimeout(() => {
                    $('.level-popup').removeClass('active');
                    $('.level-popup-shade').removeClass('active');
                }, 3000);
                $('#level span').text(l)
            }
            q = s;
        }
        
    });
    
        $(document).on('keyup', (e) => {
        if (e.which === 38) {
            ded.jump();
            v++;
            $('#score-e').html('Score: ' + v);
            if (v % 10 === 0) {
                l++;
                $('.level-popup').addClass('active').find('span').text(l);
                $('.level-popup-shade').addClass('active');
                $('#hp').css('width', l*10);
                $('#speed').css('width', l*10);
                $('#ko h1').append('<i class="fas fa-bolt"></i>')
                setTimeout(() => {
                    $('.level-popup').removeClass('active');
                    $('.level-popup-shade').removeClass('active');
                }, 3000);
                $('#level span').text(l)
            }
            w = v;
        }
        
    });
});

function timer(){
 var obj = $('#timer')[0];
 obj.innerHTML--;
  
 if (obj.innerHTML == 0) {
     $('body').empty();
     $('body').append('<div id="result"></div>')
     $('body #result').append('<h1>Счет: ' + q + '</h1>');
     $('body #result').append('<h1>Счет: ' + w + '</h1>');
     setTimeout(function(){},1000);
 }
 else {
     setTimeout(timer,1000);
 }
}
setTimeout(timer,1000);

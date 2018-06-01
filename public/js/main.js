class Player {
    
    constructor() {
        this.framesPerSecond = 15;
        this.frames = [
            'a-1.png',
            'a-2.png',
            'a-3.png',
            'a-2.png',
            'a-1.png',
        ];    
        
        this.object = $('#player');
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
        artyom = new Player();
    
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
        }
        
    });
});



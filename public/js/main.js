class Player {
    
    constructor(params = {}) {
        this.type = params.type;

        this.framesPerSecond = 20;
        this.playerObject = params.object.find('.player');
        this.scoreObject = params.object.find('.score');
        this.states = [];
        this.score = 0;

        this.playerObject.css('background-image', `url(public/img/players/${this.type}/idle.png)`);
        this.scoreObject.text(this.score);
    }

    jump() {
        if (this.states.length) {
            return;
        }

        for (let i = 2; i <= 5; i++) {
            this.states.push(() => {
                this.playerObject.css('background-image', `url(public/img/players/${this.type}/jump/${i}.png)`);
            });
        }

        for (let i = 4; i >= 1; i--) {
            this.states.push(() => {
                this.playerObject.css('background-image', `url(public/img/players/${this.type}/jump/${i}.png)`);
            });
        }

        let renderInterval = setInterval(() => {
            this.states.splice(0, 1)[0].call(this);
            if (this.states.length === 0) {
                clearInterval(renderInterval);
                this.score = this.score + 1;
                this.scoreObject.text(this.score);
            }
        }, 1000 / this.framesPerSecond);
    }

}

window.Game = {
};

$(function() {
    let artyom = new Player({
        type: 'artyom',
        object: $('#player1')
    });

    let ded = new Player({
        type: 'artyom',
        object: $('#player2')
    });
    
    $(document).on('keyup', (e) => {
        console.log(e.which);
        if (e.which === 32) {
            artyom.jump();
        }
        if (e.which === 38) {
            ded.jump();
        }
    });
});



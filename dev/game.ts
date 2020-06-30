class Game{
    constructor(){
        console.log("Game created!")
        this.gameLoop();
    }

    private gameLoop(){
        requestAnimationFrame(() => this.gameLoop());
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }
}

window.addEventListener('load', () => new Game());
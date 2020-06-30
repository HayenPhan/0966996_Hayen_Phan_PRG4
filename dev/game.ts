class Game{
   // private tank : Tank
   // private bomb : Bomb

    private gameobjects : GameObject[] = []

    constructor(){
        console.log("Game created!")

        this.gameobjects.push(new Tank())

        for(let i=0; i < 7; i++) {
            this.gameobjects.push(new Bomb())
        }

        this.gameLoop();
    }

    private gameLoop() : void {

        for(const object of this.gameobjects) {
            object.update()
        }

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
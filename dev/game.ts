class Game{
   // private tank : Tank
   // private bomb : Bomb

    private gameobjects : GameObject[] = []

    private score : number = 0

    constructor(){
        console.log("Game created!")

        this.gameobjects.push(new Tank())

        for(let i=0; i < 10; i++) {
            this.gameobjects.push(new Bomb(this))
        }

        this.gameLoop();
    }

    private gameLoop() : void {

        for(const object of this.gameobjects) {
            object.update()

            // Check collision 
            if(object instanceof Tank) {
                for(const bomb of this.gameobjects) {
                    if(bomb instanceof Bomb) {
                        if(this.checkCollision(object.getRectangle(), bomb.getRectangle())) {
                            console.log("botsing")

                            // Remove bomb
                            bomb.removeBomb()
                            this.addScore()
                        }
                    }
                }
            }
        }

        requestAnimationFrame(() => this.gameLoop());
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }

    public addScore() : void {
        let score = document.getElementsByTagName("score")[0]
        this.score++
        score.innerHTML = "" + this.score
    }
}

window.addEventListener('load', () => new Game());
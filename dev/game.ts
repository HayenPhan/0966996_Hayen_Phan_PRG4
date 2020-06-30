class Game{
   // private tank : Tank
   // private bomb : Bomb

    private gameobjects : GameObject[] = []

    private score : number = 0
    private lives : number = 0

    constructor(){
        
        this.lives = 4

        this.gameobjects.push(new Tank())

        for(let i=0; i < 10; i++) {
            this.gameobjects.push(new Bomb())
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

                        this.catchOnTime(bomb)
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

    private addScore() : void {
        let score = document.getElementsByTagName("score")[0]
        this.score++
        score.innerHTML = "" + this.score
    }

    private catchOnTime(bomb: Bomb):void {
        if(bomb.y + bomb.div.clientHeight > window.innerHeight) {
            // let lives = document.getElementsByTagName("lives")[0]
            // this.lives--
            // lives.innerHTML = "" + this.lives

            for(const object of this.gameobjects) {
                object.restart()
            }

        }
    }

    private gameOver():void {
        
    }
}

window.addEventListener('load', () => new Game());
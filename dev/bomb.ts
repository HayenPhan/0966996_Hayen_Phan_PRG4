/// <reference path="gameobject.ts" />

class Bomb extends GameObject {
    private speed: number = 0

     constructor() {
        super("bomb")


        this.x = (Math.random() * -400) - 168
        this.y = Math.ceil(Math.random() * 5) * 120
        this.speed = Math.random() * 2 + 2

    }

    public update() : void {
        this.x += this.speed
        
        if (this.x > window.innerWidth) {
            this.x = -this.div.clientWidth
        }
        
        super.update()
    }

    private getRandom(min: number, max: number): number{
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    /**
    * Set current x parameter to a random position on the x-axis
    * @param element 
    */
    private setRandomXInScreen(element : HTMLElement): void {
        let min = 0;
        let max = window.innerWidth - element.clientWidth;
    
        this.x = this.getRandom(min, max);
    }
    
    /**
    * Set current y parameter to a random position above the screen
    */
    private setRandomYAboveScreen(): void {
        let min = 0 - 500;
        let max = 0;
    
        this.y = this.getRandom(min, max);
    }
}
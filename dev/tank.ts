/// <reference path="gameobject.ts" />

class Tank extends GameObject{
    constructor() {

        super("tank")
        this.x = 50
        this.y = 500

        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e))
    }

    // W A S D
    private onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
        case 65:
            this.x -= 5
            break
        case 68:
            this.x += 5
            break
        }

        console.log(event.keyCode)
    }

    public update() : void {
       super.update()
    }


}
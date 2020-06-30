class GameObject {
     // Fields
     private _div: HTMLElement

     protected x : number = 0
     private _y: number = 0
  
    public set y(value: number) {
        this._y = value
    }
     
    public get y(): number {
        return this._y
    }

    public get div(): HTMLElement {
        return this._div
    }

    public getRectangle() : DOMRect {
        return this._div.getBoundingClientRect()
        // return this.hitbox.getBoundingClientRect()
    }

    constructor(tag : string) {
        this._div = document.createElement(tag)
        let game = document.getElementsByTagName("game")[0]!
        game.appendChild(this._div)
    }

    public update():void {
        this._div.style.transform = `translate(${this.x}px, ${this._y}px)` 
    }

    public restart() : void {
        
    }
}
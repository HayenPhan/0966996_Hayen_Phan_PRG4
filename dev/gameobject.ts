class GameObject {
     // Fields
     private _div: HTMLElement

     protected x : number = 0
     protected y : number = 0

    public get div(): HTMLElement {
        return this._div
    }

    constructor(tag : string) {
        this._div = document.createElement(tag)
        let game = document.getElementsByTagName("game")[0]!
        game.appendChild(this._div)
    }

    public update():void {
        this._div.style.transform = `translate(${this.x}px, ${this.y}px)` 
    }
}
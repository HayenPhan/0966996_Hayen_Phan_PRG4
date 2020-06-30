"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameObject = (function () {
    function GameObject(tag) {
        this.x = 0;
        this.y = 0;
        this._div = document.createElement(tag);
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this._div);
    }
    Object.defineProperty(GameObject.prototype, "div", {
        get: function () {
            return this._div;
        },
        enumerable: false,
        configurable: true
    });
    GameObject.prototype.update = function () {
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return GameObject;
}());
var Bomb = (function (_super) {
    __extends(Bomb, _super);
    function Bomb() {
        var _this = _super.call(this, "bomb") || this;
        _this.speed = 0;
        _this.x = (Math.random() * -400) - 168;
        _this.y = Math.ceil(Math.random() * 5) * 120;
        _this.speed = Math.random() * 2 + 2;
        return _this;
    }
    Bomb.prototype.update = function () {
        this.x += this.speed;
        if (this.x > window.innerWidth) {
            this.x = -this.div.clientWidth;
        }
        _super.prototype.update.call(this);
    };
    Bomb.prototype.getRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Bomb.prototype.setRandomXInScreen = function (element) {
        var min = 0;
        var max = window.innerWidth - element.clientWidth;
        this.x = this.getRandom(min, max);
    };
    Bomb.prototype.setRandomYAboveScreen = function () {
        var min = 0 - 500;
        var max = 0;
        this.y = this.getRandom(min, max);
    };
    return Bomb;
}(GameObject));
var Game = (function () {
    function Game() {
        this.gameobjects = [];
        console.log("Game created!");
        this.gameobjects.push(new Tank());
        for (var i = 0; i < 7; i++) {
            this.gameobjects.push(new Bomb());
        }
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.gameobjects; _i < _a.length; _i++) {
            var object = _a[_i];
            object.update();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    return Game;
}());
window.addEventListener('load', function () { return new Game(); });
var Tank = (function (_super) {
    __extends(Tank, _super);
    function Tank() {
        var _this = _super.call(this, "tank") || this;
        _this.x = 50;
        _this.y = 500;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        return _this;
    }
    Tank.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case 65:
                this.x -= 5;
                break;
            case 68:
                this.x += 5;
                break;
        }
        console.log(event.keyCode);
    };
    Tank.prototype.update = function () {
        _super.prototype.update.call(this);
    };
    return Tank;
}(GameObject));
//# sourceMappingURL=main.js.map
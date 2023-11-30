"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Star = exports.Square = exports.Circle = void 0;
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}
exports.Circle = Circle;
class Square {
    constructor(length) {
        this.length = length;
    }
}
exports.Square = Square;
class Star {
    constructor(length) {
        this.length = length;
    }
}
exports.Star = Star;
// in order for files to access any classes/functions/varaibles from other files
// those objects need to be exported

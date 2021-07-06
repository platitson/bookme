import { Clock } from './clock.js';

class ColoredClock extends Clock {
    constructor({ color, element }) {
        super({ element });
        this.color = this.element.style.color = color;
    }
}

export { ColoredClock };
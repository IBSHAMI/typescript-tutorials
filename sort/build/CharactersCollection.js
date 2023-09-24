"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const sorter_1 = require("./sorter");
class CharactersCollection extends sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    swap(leftIndex, rightIndex) {
        const charaters = this.data.split('');
        const leftHand = charaters[leftIndex];
        charaters[leftIndex] = charaters[rightIndex];
        charaters[rightIndex] = leftHand;
        this.data = charaters.join('');
    }
}
exports.CharactersCollection = CharactersCollection;

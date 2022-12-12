"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multipleBy = exports.randomNumber = exports.curl = void 0;
exports.curl = {
    baseUrl: 'https://app.proofofhumanity.id/',
    selector: {
        totalImg: '#__next > div > div > main > div > div.css-dubisb'
    }
};
const randomNumber = (min, max) => {
    if (min > max) {
        return (-1);
    }
    if (min == max) {
        return (min);
    }
    return (Math.floor(Math.random() * (max - min + 1)) + min);
};
exports.randomNumber = randomNumber;
const multipleBy = (num) => {
    return (0, exports.randomNumber)(0, 1000) * num;
};
exports.multipleBy = multipleBy;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomImage = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const cheerio_1 = require("cheerio");
const helpers_1 = require("../helpers/helpers");
const randomImage = () => __awaiter(void 0, void 0, void 0, function* () {
    const request = yield (0, node_fetch_1.default)(helpers_1.curl.baseUrl + `?skip=${(0, helpers_1.multipleBy)(12)}`);
    const html = yield request.text();
    const $ = (0, cheerio_1.load)(html);
    let totalImg = $(helpers_1.curl.selector.totalImg).length;
    return totalImg;
});
exports.randomImage = randomImage;

import fetch from "node-fetch";
import { load } from "cheerio";

import { curl, multipleBy } from "../helpers/helpers";

export const randomImage = async () => {

    const request = await fetch(curl.baseUrl + `?skip=${multipleBy(12)}`);

    const html = await request.text();
    const $ = load(html);

    let totalImg = $(curl.selector.totalImg).length;
    
    return totalImg;

};
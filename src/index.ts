import fetch from 'node-fetch';

export class Simsimi {

    baseUrl: string;
    authKey: string;
    headers: any;

    constructor() {

        this.baseUrl = 'https://beta-bumcoming.simsimi.com';

        this.authKey = 'nyeRS3So3uVni5wlIh79AIWsSiyGUi9L5';

        this.headers = {

            'Host': 'beta-bumcoming.simsimi.com',
            'Content-Type': 'application/json',
            'Os': 'a', /* I thinks its android */
            'Av': '8.1.0', /* App version */
            'Accept': 'application/json, text/plain, */*',
            'Accept-Encoding': 'gzip, deflate',
            'User-Agent': 'okhttp/4.9.1'

        }

    }

    async GetLanguage() {

        try {

            const response = await fetch(this.baseUrl + '/setting/lc-list', {

                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    'cc': 'TH',
                    'logUID': '123456789',
                })

            });
    
            const data = await response.json();

            return data;

        } catch (error) {
            throw error;
        }

    }

}
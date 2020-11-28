export default class Client {
    constructor() {
        this._urlBase = 'http://my-json-server.typicode.com/antonfiveis/OKRlab4/'
    }

    getData(url) {
        if(url=='')
            url='db'
        return fetch(this._urlBase + url).then(data => data.json())
    }
}
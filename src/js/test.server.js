export default class Client {
    constructor() {
        this._urlBase = 'http://my-json-server.typicode.com/antonfiveis/OKRlab4/'
    }

    async getData(url) {
        let urlparts=url.split('/')
        if(url==='')
            url='db'
        if(urlparts.length>1&& !(+urlparts[1])){
            const data = await (await fetch(this._urlBase+urlparts[0])).json()
            return data.filter((item)=>{
                return item.features.includes(urlparts[1])
            })
        }
        return fetch(this._urlBase + url).then(data => data.json())
    }
}
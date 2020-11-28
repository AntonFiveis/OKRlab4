export default class Client {
    constructor() {
        this._urlBase = 'http://my-json-server.typicode.com/antonfiveis/OKRlab4/'
    }

    async getData(url) {
        let urlparts=url.split('/')
        if(urlparts[0]==='')
            urlparts[0]='db'

        if(urlparts.length>1&& !(+urlparts[1])){
            const data = await (await fetch(this._urlBase+urlparts[0])).json()
            return data.filter((item)=>{
                return item.features.includes(urlparts[1])
            })
        }
        if(urlparts[0]=='actions'){
            const actions = await fetch(this._urlBase + urlparts[0]).then(data => data.json())
            console.log(actions)
            let data =[]
            for(let i=0;i<actions.length;i++){
                console.log(this._urlBase +'catalog/'+actions[i].pizza_id)
                let action_pizza = await fetch(this._urlBase +'catalog/'+actions[i].pizza_id).then(data => data.json())
                console.log(action_pizza)
                data.push(action_pizza)
            }
            return data
        }
        return fetch(this._urlBase + urlparts[0]).then(data => data.json())
    }
}
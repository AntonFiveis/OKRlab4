import actions_page from "./actions_page";
import loader from '../html/loader.html'
import Client from "./test.server";
import main_page from "./main-page";

export default class Router{
    constructor(rootID){
        this.root = document.getElementById(rootID)
        this.client = new Client()
    }
    route(path, data={}){

        switch (path) {
            case 'catalog':
                console.log(data)
                this.root.innerHTML =JSON.stringify( data)
                break
            case 'cart':
                this.root.innerHTML  = JSON.stringify( data)
                break
            case 'loading':
                this.root.innerHTML =loader
                break;
            case 'actions':
                this.root.innerHTML = actions_page(data)
                break;
            case '':
                this.root.innerHTML = main_page(data)
                console.log("MAIN")
                break;

            default:
                window.history.replaceState(null,null,'#')
                this.render()
                break;

        }
    }
    render(){
        const path = window.location.hash.split('#')[1]||''
        // console.log(parseQuery(path))
        this.route('loading')
        this.client.getData(path).then((data)=>{

            this.route(path.split('/')[0]||'',data)
        }).catch(()=>{
            console.log("error")
            this.route('error')
        })
    }
}
import test from '../html/test.html'
import loader from '../html/loader.html'
import Client from "./test.server";
import error from '../html/error.html'
// import {parseQuery} from "./helpers";

export default class Router{
    constructor(rootID){
        this.root = document.getElementById(rootID)
        this.client = new Client()
    }
    route(path, data={}){
        switch (path) {
            case 'catalog':
                this.root.innerHTML =test
                break
            case 'basket':
                this.root.innerHTML  = ''
                break
            case 'loading':
                this.root.innerHTML = loader
                break;
            case '':
                this.root.innerHTML = '<div>MAIN PAGE</div>'
                console.log("MAIN")
                break;
            default:
                this.root.innerHTML = error
                window.history.replaceState(null,null,'#')
                break;

        }
    }
    render(){
        const path = window.location.hash.split('#')[1]||''
        console.log(path)
        // console.log(parseQuery(path))
        this.route('loading')
        this.client.getData(path).then((data)=>{
            console.log(data)
            this.route(path,data)
        }).catch(()=>{
            this.route('error')
        })
    }
}
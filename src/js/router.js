import test from '../html/test.html'


export default class Router{
    constructor(rootID){
        this.root = document.getElementById(rootID)
    }
    route(path,data={}){
        switch (path) {
            case 'catalog':
                this.root.innerHTML =test
                console.log(data)
                break
            case 'basket':
                this.root.innerHTML  = ''
                break
            case 'loading':
                this.root.innerHTML = 'loading'
                break;

        }
    }
}
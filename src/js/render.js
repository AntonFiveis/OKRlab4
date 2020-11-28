import Router from "./router";
const router = new Router('root')
import getData from "./test.server";
export default async function render() {
    router.route('loading')

    const path = window.location.hash.split('#')[1]
    router.route(path)
}
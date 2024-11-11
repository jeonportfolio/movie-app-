import { Component } from "./core/jsu";
import TheHeader from "./component/TheHeader";

export default class App extends Component {
    render() {
        const theHeader = new TheHeader().el
        const routerView = document.createElement('router-view')

        this.el.append(
            theHeader,
            routerView
        )
    }
    
}
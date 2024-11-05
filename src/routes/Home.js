import { Component } from "../core/jsu";
import Headline from "../component/Headline";

export default class Home extends Component {
    render() {
        const headline = new Headline().el

        this.el.classList.add('container')
        this.el.append(
            headline
        )
    } 
}
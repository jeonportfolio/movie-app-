import { Component } from "../core/jsu";
import Headline from "../component/Headline";
import Search from "../component/Search";

export default class Home extends Component {
    render() {
        const headline = new Headline().el
        const search =new Search().el

        this.el.classList.add('container')
        this.el.append(
            headline,
            search
        )
    } 
}
import { Component } from "../core/jsu";

export default class TheHeader extends Component {
    constructor(){
        super({
            tagName: 'header',
            state: {
                menus: [
                    {
                        name:'Search',
                        herf:'#/'
                    },
                    {
                        name: 'Movie',
                        herf: '#movie?id=tt4520988'
                    },
                    {
                        name : 'About',
                        herf: '#/about'
                    }
                ]
            }
        })
    }
    render() {
        this.el.innerHTML = /* html */ `
            <a 
                herf="#/" 
                class="logo">
                <span>Movie</span>BOX
            </a>
            <nav>
                <ul>
                    ${this.state.menus.map(menu => {
                        return /* html */`
                            <li>
                                <a herf="${menu.href}">
                                    ${menu.name}
                                </a>
                            </li>
                        `
                    }).join('')}
                </ul>
            </nav>
            <a href="#/about" class="user">
                <img src="./logo.png" alt="User">
            </a>
        `
    }
}
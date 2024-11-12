import { Component } from "../core/jsu";

export default class TheFooter extends Component {
    constructor() {
        super({
            tagName: 'footer'
        })
    }

    render() {
        this.el.innerHTML = /* html */`
            <div>
                <a href="https://github.com/jeonportfolio/movie-app-">
                        사이트 코드보기 
                </a>
            </div>
            <div>
                <a href="https://blog.naver.com/turtleweb">
                    ${new Date().getFullYear()}    
                    블로그 바로가기 
                </a>
            </div>
        `
    }
}
import { Component } from "../core/jsu";

export default class Search extends Component {
    render() {
        this.el.classList.add('search')
        this.el.innerHTML = /* html */`
            <input placeholder="영화 제목을 입력해주세요!"/>
            <button class="btn btn-primary">
                CLICK
            </button>
        `

        const inputEl = this.el.querySelector('input')
        inputEl.addEventListener('input', () => {
            // 
        })
        inputEl.addEventListener('keydown', event => {
            if(event.key === 'Enter'){

            }
        })

        const btnEl = this.el.querySelector('.btn')
        btnEl.addEventListener('click', () => {
            
        })
    }
}
import React, { Component } from 'react'
import Scoreboard from './Scoreboard.jsx'
class Game extends Component {
    
    constructor(props) {
        super(props)
        this.canvas = React.createRef()
        this.width = window.innerWidth
        this.height = window.innerHeight
    }
    
    componentDidMount() {
    }

    render() {
        return (
            <canvas id="ctx" ref={this.canvas} width={this.width} height={this.height} tabIndex="0"/>
        )
    }
}

export default Game
import React, { Component } from 'react';
import style from "./home.css";
import { FaRandom } from 'react-icons/fa';

class RandomizeButton extends Component {

    constructor(props) {
        super(props);
        this.spacebarInputRef = React.createRef();
    }

    handleClickRandomize() {
        var { passages } = this.props;
        var passage = passages[Math.floor(Math.random()*passages.length)];
        this.props.handleSubmit(passage);
    }

    render() {
        return(
            <div
                className={style.randomizeBtn + " " + style.tooltip}
                onClick={()=>{this.handleClickRandomize()}}>
                <FaRandom />
                <span className={style.tooltiptext}>Hit spacebar to randomize</span>
            </div>
        );
    }
}
export default RandomizeButton;

import React, { Component } from 'react';
import style from "./card.css";

class Card extends Component {
    render() {
        return (
            <div className={"card " + style.passagecard} style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.passage.author}</h5>
                    <h6 className="card-title">{this.props.passage.book}</h6>
                    <p className="card-text">{this.props.passage.content}</p>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary">Edit</button>
                        <button type="button" className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;

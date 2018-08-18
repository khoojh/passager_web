import React, { Component } from 'react';
import Footer from "../footer/footer.js";
import style from "./about.css";

const QUOTE = "\"So okay― there you are in your room with the shade down and the door shut and the plug pulled out of the base of the telephone. You've blown up your TV and committed yourself to a thousand words a day, come hell or high water. Now comes the big question: What are you going to write about? And the equally big answer: Anything you damn well want.\""
const SOURCE = "― Stephen King, On Writing: A Memoir of the Craft";
const TEXT = "\"Anytime you damn well want\" sounds like a good enough advice until you realize it could mean anything and everything. Here at Passager, we want to be the place where you can come to get a little inspiration in writing, to share that one passage that's been keeping you up all night, or to discover companions in reading or writing."

class About extends Component {

    render() {
        return (
            <div className={"container-fluid " + style.about}>
                <div className={style.about_title}>About</div>
                <div className="row">
                    <div className="col">
                        <div className={style.about_div}>
                            <h2 className={style.about_quote}>{QUOTE}</h2>
                            <h4 className={style.about_source}>{SOURCE}</h4>
                        </div>
                    </div>
                    <div className="col">
                        <h2 className={style.about_text}>{TEXT}</h2>
                    </div>
                </div>
            </div>
        );
    }
}



export default About;

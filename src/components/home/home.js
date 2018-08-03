import React, { Component } from 'react';
import Header from "../header/header.js";
import Card from "../card/card.js";
import Footer from "../footer/footer.js";
import AddButton from "./addbutton.js";
import { connect } from 'react-redux';
import * as actions from "../../redux/passages/action.js";
import style from "./home.css";

class Home extends Component {

    componentWillMount() {
        this.props.fetchPassages();
    }

    // {/*}<div className="container">
    //     <Header />
    //     <div className="container-fluid">
    //         <div className={style.display}>
    //             Five million chinese
    //         </div>
    //         <AddButton />
    //         {this.props.passages.map((passage, i) => {
    //             return <Card passage={passage} key={i}/>
    //         })}
    //     </div>
    //     <Footer />
    // </div>*/}

    render() {
        var passages = [
            {
                "author": "Friedrich Nietzsche",
                "book": "Beyond Good and Evil",
                "id": 0,
                "content": "Inasmuch as we are born, sworn, jealous friends of solitude, our own deepest, most midnightly, noon-likely solitude. This is the type of people we are, we free spirits! and perhaps you are something of this yourselves, you who are approaching? you new philosophers?"
            },
            {
                "author": "Stephen King",
                "book": "On Writing",
                "id": 1,
                "content": "It starts with this: put your desk in the corner, and every time you sit down there to write, remind yourself why it isn’t in the middle of the room. Life isn’t a support-system for art. It’s the other way around."
            },
            {
                "author": "Stephen King",
                "book": "Different Seasons: The Body",
                "id": 2,
                "content": "But five hundred million Red Chinese don't give a shit, right? The most important things are the hardest to say, because words diminish them. It's hard to make strangers care about the good things in your life."
            },
            {
                "author": "Haruki Murakami",
                "book": "Kafka On The Shore",
                "id": 3,
                "content": "The massive bank of thunderclouds crossed the city at a lethargic pace, letting loose a flurry of lightning bolts as if probing every nook and cranny for a long-lost morality, finally dwindling to a faint, angry echo from the eastern sky. And right then the violent rain came to a sudden halt, followed by an unearthly silence. Hoshino stood up and opened the window to let in some air. The storm clouds had vanished, the sky covered once more by a thin membane of pale clouds. All the buildings were wet, the moist cracks in their walls dark, like old people's veins. Water dripped off power lines and formed puddles on the ground. Birds flew out from where they'd sought shelter, chirping loudly as they vied for the bugs that were out themselves now that the storm had abated."
            },
            {
                "author": "Haruki Murakami",
                "book": "Kafka On The Shore",
                "id": 4,
                "content": "But this is something you have to figure out on your own. Nobody can help you. That's what love's all about, Kafka. You're the one having those wonderful feelings, but you have to go it alone as you wander through the dark. Your mind and body have to bear it all. All by yourself."
            },
            {
                "author": "Stephen King",
                "book": "Different Seasons: The Body",
                "id": 5,
                "content": "It happens. Friends come in and out of your life like busboys in a restaurant, did you ever notice that? But when I think of that dream, the corpses under the water pulling implacably at my legs, it seems right that it should be that way. Some people drown, that's all. It's not fair, but it happens. Some people drown."
            },
            {
                "author": "David Foster Wallace",
                "book": "A Supposedly Fun Thing I'll Never Do Again: E Unibus Pluram",
                "id": 6,
                "content": "Fiction writers as a species tend to be oglers. They tend to lurk and to stare. They are born watchers. They are viewers. They are the ones on the subway about whose nonchalant stare there is something creepy, somehow. Almost predatory. This is because human situations are writers' food. Fiction writers watch other humans sort of the way gapers slow down for car wrecks: they covet a vision of themselves as witnesses."
            },
            {
                "author": "Haruki Murakami",
                "book": "Kafka On The Shore",
                "id": 7,
                "content": "\"Every one of us is losing something precious to us,\", he says after the phone stops ringing. \"Lost opportunities, lost possibilities, feelings we can never get back again. That's part of what it means to be alive. But inside our heads—at least that's where I imagine it—there's a little room where we store those memories. A room like the stacks in this library. And to understand the workings of our own heart we have to keep on making new reference cards. We have to dust things off every once in a while, let in fresh air, change the water in the flower vases. In other words, you'll live forever in your own private library.\""
            }
        ]
        var passage = passages[Math.floor(Math.random()*passages.length)];
        return (
            <div className={"container-fluid " + style.display}>
                <div className={style.display_div}>
                    <h2 className={style.display_content}>{passage.content}</h2>
                    <h4 className={style.display_source}>{passage.author}, {passage.book}</h4>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        passages: state.passages.passages
    };
}

export default connect(mapStateToProps, actions)(Home);

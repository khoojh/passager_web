import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from "../signin/signin.css";

class SignUp extends Component {

    render() {
        return (
            <div className={"container-fluid " + style.signin}>
                <div className={style.signin_title}>Sign Up</div>
                <form className={style.signin_form}>
                    <div className="form-group">
                        <input type="email" className={" " + style.signin_input} placeholder="Email" onFocus={()=>{console.log("HI", this.placeholder);this.placeholder = ''}}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className={" " + style.signin_input} placeholder="Password" />
                    </div>
                    <button type="submit" className={"btn btn-info " + style.signin_btn}>Sign Up</button>
                    </form>
            </div>
        );
    }
}

export default SignUp;
